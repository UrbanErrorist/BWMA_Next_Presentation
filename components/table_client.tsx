"use client";
import { timeAgo } from "@/lib/utils";
import Image from "next/image";
import RefreshButton from "./refresh-button";
import React, { useEffect, useState } from "react";

export default function TableClient() {

    const [users, setUsers] = useState<user[]>([]);


    useEffect(() => {
        fetch('/api/user', { method: 'GET' }).then(r => r.json()).then(r => setUsers(r.data));
    }, []);

    return (
        <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold">Users in DB</h2>
                    <p className="text-sm text-gray-500">Fetched {users.length} users</p>
                </div>
                <RefreshButton />
            </div>
            <div className="divide-y divide-gray-900/5">
                {users.map((user) => (
                    <div
                        key={user.name}
                        className="flex items-center justify-between py-3"
                    >
                        <div className="flex items-center space-x-4">
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={48}
                                height={48}
                                className="rounded-full ring-1 ring-gray-900/5"
                            />
                            <div className="space-y-1">
                                <p className="font-medium leading-none">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.mobile}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}