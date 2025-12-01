"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

// Blog data
const blogData = [
    {
        id: 1,
        title: "The Future of Digital Payments",
        img: "/images/bloglisting/blog-card-1.webp",
        category: "Digital Payments",
        author: "Ishita Rao",
        slug: "BlogDetail",
        date: "20 November 2025",
        popularity: 95,
    },
    {
        id: 2,
        title: "Integrate Portal in 5 Easy Steps",
        img: "/images/bloglisting/blog-card-2.webp",
        category: "Payment Integration",
        author: "Dev Shah",
        slug: "BlogDetail",
        date: "19 November 2025",
        popularity: 88,
    },
    {
        id: 3,
        title: "7 Benefits of Using Dhatupay for Your Business",
        img: "/images/bloglisting/blog-card-3.webp",
        category: "Business Benefits",
        author: "Harsh Nayak",
        slug: "BlogDetail",
        date: "19 November 2025",
        popularity: 80,
    },
    {
        id: 4,
        title: "Digital Signatures: A Must for Online Payment",
        img: "/images/bloglisting/blog-card-4.webp",
        category: "Digital Signatures",
        author: "John Menon",
        slug: "BlogDetail",
        date: "19 November 2025",
        popularity: 85,
    },
    {
        id: 5,
        title: "International Payments Made Easy",
        img: "/images/bloglisting/blog-card-5.webp",
        category: "Global Business",
        author: "Malti Chahar",
        slug: "BlogDetail",
        date: "19 November 2025",
        popularity: 90,
    },

    {
        id: 6,
        title: "How Digitally Redefine Secure Transactions",
        img: "/images/bloglisting/blog-card-6.webp",
        category: "Payment Encryption",
        author: "Kapish Modi",
        slug: "BlogDetail",
        date: "19 November 2025",
        popularity: 90,
    },
];

type Blog = {
    id: number;
    title: string;
    img: string;
    category: string;
    author: string;
    slug: string;
    date: string;
    popularity: number;
};

export default function BlogListingCards() {
    const [activeSort, setActiveSort] = useState("popularity");

    const parseDate = (dateStr: string) => new Date(dateStr);

    // Sort blog data according to dropdown
    const sortedBlogs = [...blogData].sort((a, b) => {
        if (activeSort === "latest") return parseDate(b.date).getTime() - parseDate(a.date).getTime();
        if (activeSort === "oldest") return parseDate(a.date).getTime() - parseDate(b.date).getTime();
        if (activeSort === "popularity") return b.popularity - a.popularity;
        return 0;
    });

    // Split blogs into rows of 2 cards each
    const rows: Blog[][] = [];
    for (let i = 0; i < sortedBlogs.length; i += 2) {
        rows.push(sortedBlogs.slice(i, i + 2));
    }

    return (
        <section className="section blog-listing-main">
            <div className="container">
                <div className="blog-listing-tabs">
                    <Tabs defaultValue="dates">
                        <TabsList className="tabs-list">
                            <TabsTrigger value="dates" className="tabs-trigger text-rg h6">
                                Dates
                            </TabsTrigger>
                            <TabsTrigger value="duration" className="tabs-trigger text-rg h6">
                                Duration
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="sort-dropdown">
                        <span className="sort-label text-md h6 text-grey">Sort By</span>
                        <Select defaultValue={activeSort} onValueChange={(val) => setActiveSort(val)}>
                            <SelectTrigger className="select-trigger text-rg h6">
                                <SelectValue placeholder="Popularity" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className="text-rg h6" value="popularity">Popularity</SelectItem>
                                <SelectItem className="text-rg h6" value="latest">Latest</SelectItem>
                                <SelectItem className="text-rg h6" value="oldest">Oldest</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="blog-listing-card-wrapper">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className={`blog-list-card-rw blog-list-card-rw-${rowIndex + 1}`}>
                            {row.map((blog) => (
                                <div key={blog.id} className="blog-list-cards">
                                    <Link href={`/${blog.slug}`} className="block">
                                        <div className="blog-card-1">
                                            <Image
                                                src={blog.img}
                                                alt={blog.title}
                                                width={780}
                                                height={577}
                                            />
                                            <div className="blog-listing-card-detail">
                                                <span className="digi-payment-blog text-rg text-14 site-radius-20">{blog.category}</span>
                                                <h3 className="blog-listing-title text-md h5 ">{blog.title}</h3>
                                                <div className="blog-listing-cards-name-date">
                                                    <span className="text-rg text-14 text-grey">{blog.author}</span>
                                                    <span className="text-rg text-14 text-grey">{blog.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
