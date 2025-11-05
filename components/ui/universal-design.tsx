"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function UniversalDesign() {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setActiveTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <div className={cn(
      "min-h-screen transition-all duration-500 ease-in-out",
      activeTheme === "dark" 
        ? "bg-black text-white" 
        : "bg-white text-black"
    )}>
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            Universal Design
          </div>
          <button
            onClick={toggleTheme}
            className={cn(
              "px-6 py-3 rounded-full font-medium transition-all duration-300 border",
              activeTheme === "dark"
                ? "bg-white text-black border-white hover:bg-gray-100"
                : "bg-black text-white border-black hover:bg-gray-900"
            )}
          >
            {activeTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold mb-6 leading-tight",
            activeTheme === "dark" ? "text-white" : "text-black"
          )}>
            Beautiful Design for
            <span className={cn(
              "block mt-2",
              activeTheme === "dark" ? "text-gray-300" : "text-gray-700"
            )}>
              Everyone
            </span>
          </h1>
          <p className={cn(
            "text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto",
            activeTheme === "dark" ? "text-gray-400" : "text-gray-600"
          )}>
            Clean typography, timeless colors, and universal appeal. 
            White and black never go out of style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={cn(
              "px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300",
              activeTheme === "dark"
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            )}>
              Get Started
            </button>
            <button className={cn(
              "px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2",
              activeTheme === "dark"
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            )}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-16",
            activeTheme === "dark" ? "text-white" : "text-black"
          )}>
            Why Everyone Loves This Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Timeless Colors",
                description: "Black and white never go out of style. They work everywhere, for everyone.",
                icon: "⚫"
              },
              {
                title: "Perfect Typography",
                description: "Clean, readable fonts that look great on any screen size.",
                icon: "📝"
              },
              {
                title: "Universal Appeal",
                description: "Design that resonates with people from all cultures and backgrounds.",
                icon: "🌍"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 rounded-2xl transition-all duration-300 hover:scale-105",
                  activeTheme === "dark"
                    ? "bg-gray-900 border border-gray-800 hover:border-gray-700"
                    : "bg-gray-50 border border-gray-200 hover:border-gray-300"
                )}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={cn(
                  "text-xl font-bold mb-3",
                  activeTheme === "dark" ? "text-white" : "text-black"
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  "leading-relaxed",
                  activeTheme === "dark" ? "text-gray-400" : "text-gray-600"
                )}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-16",
            activeTheme === "dark" ? "text-white" : "text-black"
          )}>
            Beautiful Typography
          </h2>
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                Heading One
              </h1>
              <p className="text-lg opacity-75">Bold, strong, and attention-grabbing</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-semibold mb-4">
                Heading Two
              </h2>
              <p className="text-lg opacity-75">Perfect for sections and subtitles</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-medium mb-4">
                Heading Three
              </h3>
              <p className="text-lg opacity-75">Great for sub-sections and features</p>
            </div>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed">
                Body text that's comfortable to read. Perfect spacing, 
                optimal contrast, and clean lines make this typography 
                universally appealing and easy on the eyes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-16",
            activeTheme === "dark" ? "text-white" : "text-black"
          )}>
            Perfect Color Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Pure Black", class: "bg-black" },
              { name: "Charcoal", class: "bg-gray-900" },
              { name: "Gray", class: "bg-gray-500" },
              { name: "Light Gray", class: "bg-gray-300" },
              { name: "Pure White", class: "bg-white border" },
              { name: "Off White", class: "bg-gray-100 border" },
              { name: "Dark Gray", class: "bg-gray-800" },
              { name: "Medium Gray", class: "bg-gray-600" }
            ].map((color, index) => (
              <div key={index} className="text-center">
                <div className={cn(
                  "h-24 rounded-lg mb-2 transition-all duration-300 hover:scale-105",
                  color.class,
                  activeTheme === "light" && color.class.includes("white") && "border-gray-300"
                )} />
                <p className={cn(
                  "text-sm font-medium",
                  activeTheme === "dark" ? "text-gray-300" : "text-gray-700"
                )}>
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={cn(
        "relative px-6 py-12 mt-20 border-t",
        activeTheme === "dark"
          ? "border-gray-800 bg-gray-950"
          : "border-gray-200 bg-gray-50"
      )}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={cn(
            "text-lg mb-4",
            activeTheme === "dark" ? "text-gray-400" : "text-gray-600"
          )}>
            Design that brings people together
          </p>
          <p className={cn(
            "text-sm",
            activeTheme === "dark" ? "text-gray-500" : "text-gray-500"
          )}>
            © 2024 Universal Design. Made with ❤️ for everyone.
          </p>
        </div>
      </footer>
    </div>
  );
}
