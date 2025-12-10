"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Blog Type Definition
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

// Category-based blog data
const digitalSignatures = [
	{
		id: 1,
		title: "Digital Signature — What It Is & Why You Need It",
		img: "/images/bloglisting/digital-signature.webp",
		category: "Digital Signatures",
		author: "Smit Shah",
		slug: "DigitalSignature-TheSecure-PaperlessWaytoSignDocuments",
		date: "09 December 2025",
		popularity: 95,
	},
];

const digitalPayments = [
	{
		id: 2,
		title: "Digital Payments — Understanding the Benefits",
		img: "/images/bloglisting/digital-payments.webp",
		category: "Digital Payments",
		author: "Smit Shah",
		slug: "DigitalPayments-101",
		date: "09 December 2025",
		popularity: 80,
	},
];

const paymentIntegration = [
	{
		id: 3,
		title: "One-Stop Payment Platform for Clinical Trials",
		img: "/images/bloglisting/payment-integration.webp",
		category: "Payment Integration",
		author: "Smit Shah",
		slug: "Why-Clinical-Trial-Portals-Need-One-Stop-Payment-Platform",
		date: "09 December 2025",
		popularity: 90,
	},
];

// Category configuration
const categories = [
	{ value: "digitalSignatures", label: "Digital Signatures", data: digitalSignatures },
	{ value: "digitalPayments", label: "Digital Payments", data: digitalPayments },
	{ value: "paymentIntegration", label: "Payment Integration", data: paymentIntegration },
];

export default function BlogListingCards() {
	const [activeTab, setActiveTab] = useState("digitalSignatures");
	const tabsListRef = useRef<HTMLDivElement>(null);
	  useEffect(() => {
    // Only apply on screens less than 575px
    if (window.innerWidth < 575 && tabsListRef.current) {
      const activeTabElement = tabsListRef.current.querySelector(`[data-state="active"]`);
      
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeTab]);

	// Get current category data based on active tab
	const currentCategoryData = categories.find(cat => cat.value === activeTab)?.data || [];

	return (
		<section className="section blog-listing-main">
			<div className="container">
				<div className="blog-listing-tabs">
					<Tabs value={activeTab} onValueChange={setActiveTab}>
						<TabsList className="trust-tabs-list" ref={tabsListRef}>
							{categories.map((category) => (
                                <TabsTrigger key={category.value} value={category.value}  className="trust-tab-trigger text-20 text-md">
									{category.label}
								</TabsTrigger>
							))}
                        </TabsList>
					</Tabs>
				</div>

				<div className="blog-listing-card-wrapper">
					{currentCategoryData.map((blog) => (
						<div key={blog.id} className="blog-list-cards">
							<Link href={blog.slug} className="block">
								<div className="blog-card-1">
									<Image src={blog.img} alt={blog.title} width={780} height={577} />
								</div>

								<div className="blog-listing-card-detail">
									<span className="digi-payment-blog text-rg text-14 site-radius-20">{blog.category}</span>

									<h3 className="blog-listing-title text-md h5">{blog.title}</h3>

									<div className="blog-listing-cards-name-date">
										<span className="text-rg text-14 text-grey">{blog.author}</span>

										<span className="text-rg text-14 text-grey">{blog.date}</span>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
