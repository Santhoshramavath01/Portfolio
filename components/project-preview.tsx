"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Users,
  Bell,
  BarChart3,
} from "lucide-react";

interface ProjectPreviewProps {
  label: string;
  index: number;
}

export function ProjectPreview({
  label,
  index,
}: ProjectPreviewProps) {
  /* --------------------------------------------------
     SMART CAMPUS
     -------------------------------------------------- */
  if (index === 1) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#101015]">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(130,130,180,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(130,130,180,0.08) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        {/* Purple ambient glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dashboard */}
        <div className="relative z-10 flex h-full w-full items-center justify-center p-5 sm:p-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[470px] overflow-hidden rounded-xl border border-white/[0.09] bg-[#141419]/95 shadow-2xl"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[9px] font-bold text-white">
                  SC
                </div>

                <span className="font-mono text-[10px] text-white/70">
                  Smart Campus
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Bell size={12} className="text-white/40" />

                <div className="h-5 w-5 rounded-full bg-indigo-400/20 ring-1 ring-indigo-400/30" />
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-[48px_1fr]">
              {/* Sidebar */}
              <div className="border-r border-white/[0.06] p-2">
                <div className="flex flex-col items-center gap-3">
                  {[BarChart3, CalendarDays, MessageCircle, Users].map(
                    (Icon, i) => (
                      <motion.div
                        key={i}
                        animate={
                          i === 0
                            ? {
                                opacity: [0.5, 1, 0.5],
                              }
                            : undefined
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className={`flex h-7 w-7 items-center justify-center rounded-md ${
                          i === 0
                            ? "bg-indigo-500/15 text-indigo-300"
                            : "text-white/30"
                        }`}
                      >
                        <Icon size={13} />
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Main dashboard */}
              <div className="p-4">
                <div className="mb-3">
                  <p className="font-display text-[13px] font-medium text-white/90">
                    Campus Overview
                  </p>

                  <p className="mt-0.5 font-mono text-[8px] text-white/35">
                    Welcome back, Admin
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <DashboardStat
                    value="1,248"
                    label="Students"
                    icon={<Users size={10} />}
                  />

                  <DashboardStat
                    value="42"
                    label="Events"
                    icon={<CalendarDays size={10} />}
                  />

                  <DashboardStat
                    value="18"
                    label="Rooms"
                    icon={<CheckCircle2 size={10} />}
                  />
                </div>

                {/* Activity */}
                <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.015] p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-white/50">
                      Recent Activity
                    </span>

                    <span className="font-mono text-[8px] text-indigo-300">
                      LIVE
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Activity
                      title="New event created"
                      time="2 min ago"
                    />

                    <Activity
                      title="Room reservation approved"
                      time="8 min ago"
                    />

                    <Activity
                      title="New student registered"
                      time="14 min ago"
                    />
                  </div>
                </div>

                {/* Bottom chart */}
                <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.015] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-white/45">
                      Campus Activity
                    </span>

                    <span className="font-mono text-[8px] text-white/25">
                      This week
                    </span>
                  </div>

                  <div className="flex h-14 items-end gap-1.5">
                    {[35, 48, 32, 62, 50, 76, 58, 88, 66, 78, 54, 70].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.7,
                            delay: i * 0.04,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex-1 rounded-t-sm bg-indigo-400/40"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating status badge */}
          <motion.div
            className="absolute bottom-5 right-5 hidden rounded-full border border-indigo-400/20 bg-[#15151b]/90 px-3 py-1.5 shadow-xl sm:flex"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="mr-1.5 h-1.5 w-1.5 self-center rounded-full bg-emerald-400" />

            <span className="font-mono text-[8px] text-white/50">
              System Online
            </span>
          </motion.div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------
     FINOVA
     -------------------------------------------------- */
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#101015]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(130,130,180,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(130,130,180,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <motion.div
        className="absolute h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 text-center">
        <div className="mb-3 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-white/10"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <p className="font-mono text-[11px] text-white/35">{label}</p>
      </div>
    </div>
  );
}

/* --------------------------------------------------
   SMALL DASHBOARD COMPONENTS
   -------------------------------------------------- */

function DashboardStat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5"
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-[8px] text-white/35">
          {label}
        </span>

        <span className="text-indigo-300/70">{icon}</span>
      </div>

      <p className="font-display text-[14px] font-medium text-white/85">
        {value}
      </p>
    </motion.div>
  );
}

function Activity({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex min-w-0 items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />

        <span className="truncate font-mono text-[8px] text-white/45">
          {title}
        </span>
      </div>

      <span className="shrink-0 font-mono text-[7px] text-white/20">
        {time}
      </span>
    </div>
  );
}