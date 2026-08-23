"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function InDevelopment() {
    const searchParams = useSearchParams();
    const project = searchParams.get("project");

    const projects: Record<string, {
        name: string;
        image: string;
    }> = {
        airflow: {
            name: "Airflow Data Pipeline",
            image: "/airflow-fan.png",
        },
        grafana: {
            name: "Grafana Monitoring Dashboard",
            image: "/grafana-icon.svg",
        },
    };

    const currentProject = projects[project || ""];

    return (
        <main className="min-h-screen bg-[#050505] text-gray-200 flex items-center justify-center p-5">

            <div className="w-full max-w-[800px] border border-[#333] bg-[#0b0b0b] shadow-[0_0_30px_rgba(0,0,0,0.6)]">

                {/* Terminal Header */}
                <div className="h-[38px] flex items-center px-[14px] border-b border-[#333] bg-[#111]">
                    <span className="w-[10px] h-[10px] rounded-full mr-[7px] bg-[#ff5f56]" />
                    <span className="w-[10px] h-[10px] rounded-full mr-[7px] bg-[#ffbd2e]" />
                    <span className="w-[10px] h-[10px] rounded-full mr-[7px] bg-[#27c93f]" />
                    <span className="ml-[10px] text-[#888] text-[13px] font-mono">
                        system@projects:~
                    </span>
                </div>

                {/* Terminal Body */}
                <div className="p-[35px] leading-[1.8] font-mono text-sm md:text-base max-sm:p-5 max-sm:text-[13px]">

                    <div className="text-[#555]">
                        --------------------------------------------------
                    </div>

                    <div>
                        [STATUS:{" "}
                        <span className="text-[#ffbd2e] font-bold">
                            404_FEATURE_IN_PROGRESS
                        </span>
                        ]
                    </div>

                    <div className="text-[#555]">
                        --------------------------------------------------
                    </div>

                    <br />

                    <div>&gt; Loading module...</div>

                    <div>
                        &gt; Project:{" "}
                        <span className="text-[#ddd]">
                            {currentProject?.name || "Unknown Module"}
                        </span>
                    </div>

                    <div>
                        &gt; Status:{" "}
                        <span className="text-[#ffbd2e] font-bold">
                            Work In Progress
                        </span>
                    </div>

                    <div>
                        &gt; Estimated Completion:{" "}
                        <span className="text-[#ddd]">Soon</span>
                    </div>

                    <br />

                    <div className="text-[#ddd]">
                        Notice: This feature is currently under active development.
                    </div>

                    <br />

                    <div className="text-[#555]">
                        --------------------------------------------------
                    </div>

                    <div>
                        system@projects:~${" "}
                        <span className="inline-block w-2 h-[18px] bg-[#ddd] ml-1 align-middle animate-[blink_1s_infinite]" />
                    </div>

                    {/* Project Image */}
                    {currentProject && (
                        <div className="mt-10">
                            <div className="text-[#777] mb-4">
                                &gt; Preview: {currentProject.name}
                            </div>
                            <div className="border border-[#333] bg-[#0b0b0b] p-3 rounded-lg">
                                <Image
                                    src={currentProject.image}
                                    alt={currentProject.name}
                                    width={800}
                                    height={0}
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        </div>
                    )}

                    <a
                        href="/"
                        className="inline-block mt-6 text-[#888] border border-[#333] px-[14px] py-2 hover:text-white hover:border-[#777] hover:bg-[#151515] transition-colors"
                    >
                        ← Return to Home Page
                    </a>

                </div>

            </div>

        </main>
    );
}