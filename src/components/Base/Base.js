import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Base.css"

export default function Base({ children }) {
    return (
        <>
            <Header />
            <main>
                <div class="content">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}