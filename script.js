
// BETTER CV
 

   document.addEventListener("DOMContentLoaded", () => {

    //    MOBILE NAVIGATION

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");

    if (menuToggle && mobileNav) {
        const closeMobileMenu = () => {
            mobileNav.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");
        };

        const toggleMobileMenu = () => {
            const isOpen = mobileNav.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        };

        // Open / close mobile navigation
        menuToggle.addEventListener("click", toggleMobileMenu);

        // Close menu after clicking a navigation link
        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
        });

        // Close menu with Escape key
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        });

        // Reset mobile menu when switching to desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }


    //    CUSTOMER REVIEWS

    const reviews = [
        {
            name: "Nan May***",
            role: "Health Care Assistant",
            photo: "img/reviews/customer-01.webp",
            text:
                "အရင် CV အဟောင်းထက် အများကြီး ပိုကြည့်ကောင်းပြီး ဖတ်ရတာ ရှင်းရှင်းလင်းလင်း ဖြစ်သွားတယ်။ " +
                "စာရွက်စာတမ်း အထောက်အထားတွေလည်း တစ်ခါတည်း သေသပ်အောင် လုပ်ပေးထားတော့ " +
                "အလုပ်လျှောက်ဖို့ ယုံကြည်မှုပိုရှိသွားတယ်။ Better CV ကို ကျေးဇူးတင်ပါတယ်ရှင့်"
        },

        {
            name: "Nay Lin***",
            role: "F&B Professional",
            photo: "img/reviews/customer-02.webp",
            text:
                "CV Format က ရှင်းရှင်းလင်းလင်းနဲ့ ကြည့်ကောင်းသလို ကိုယ့်လုပ်ငန်းအတွေ့အကြုံတွေကို " +
                "စနစ်တကျ ပြန်စီပေးထားတာ အရမ်းကြိုက်ပါတယ်။ စာရွက်စာတမ်းလုပ်ရတာလည်း လက်မဝင်ဘဲ " +
                "အစစအရာရာ သေချာဆွေးနွေး အကြံပြုပေးလို့ အထူးကျေနပ်မိပါတယ်။"
        },

        {
            name: "Nwe Nwe***",
            role: "Retail Sales Professional",
            photo: "img/reviews/customer-03.webp",
            text:
                "စင်ကာပူ Retail အလုပ်ခေါ်စာတွေဆီ လျှောက်ဖို့ CV, Cover Letter ရော Video Script ပါ " +
                "သေချာပြင်ပေးခဲ့လို့ Interview အောင်မြင်ပြီး အခု Singapore မှာ Retail Sales အဖြစ် " +
                "အလုပ်ရသွားပါပြီ။ အလုပ်လျှောက်ဖို့ CV လိုအပ်သူတွေအတွက် Better CV ကို " +
                "တကယ်ညွှန်းပေးချင်ပါတယ်။"
        },

        {
            name: "Zin Myo***",
            role: "Warehouse Professional",
            photo: "img/reviews/customer-04.webp",
            text:
                "စင်ကာပူ Warehouse ဘက်မှာ အလုပ်လျှောက်ဖို့အတွက် Better CV မှာ Package 2 ယူပြီး " +
                "CV ပြင်ခဲ့တာပါ။ Inventory စီမံခန့်ခွဲမှုနဲ့ Warehouse အတွေ့အကြုံတွေကို " +
                "စနစ်တကျနဲ့ ရေးပေးခဲ့လို့ အလုပ်ခေါ်ယူသူတွေဘက်က တန်းသဘောကျခဲ့ပါတယ်။ " +
                "အခုဆိုရင် Warehouse Storekeeper အနေနဲ့ အလုပ်ရရှိသွားပါပြီ။ " +
                "ကျေးဇူးအများကြီးတင်ပါတယ်ခင်ဗျာ။"
        }
    ];

    const reviewTrack = document.getElementById("reviewTrack");
    const reviewDots = document.getElementById("reviewDots");
    const reviewPrev = document.getElementById("reviewPrev");
    const reviewNext = document.getElementById("reviewNext");
    const reviewSlider = document.querySelector(".review-slider");

    let currentReview = 0;
    let reviewTimer = null;


    //    REVIEW RENDERING
    const renderReviews = () => {
        if (!reviewTrack || reviews.length === 0) {
            return;
        }

        reviewTrack.innerHTML = reviews
            .map(
                (review, index) => `
                    <article
                        class="review-slide"
                        aria-hidden="${index !== 0}"
                    >
                        <div class="review-card">

                            <div
                                class="review-stars"
                                aria-label="5 out of 5 stars"
                            >
                                ★★★★★
                            </div>

                            <p class="review-text">
                                “${escapeHtml(review.text)}”
                            </p>

                            <div class="review-person">

                                <div class="review-photo">
                                    <img
                                        src="${escapeAttribute(review.photo)}"
                                        alt="${escapeAttribute(review.name)}"
                                        loading="lazy"
                                    >
                                </div>

                                <div>
                                    <strong>
                                        ${escapeHtml(review.name)}
                                    </strong>

                                    <span>
                                        ${escapeHtml(review.role)}
                                    </span>
                                </div>

                            </div>

                        </div>
                    </article>
                `
            )
            .join("");

        renderReviewDots();
    };


    //    REVIEW DOTS

    const renderReviewDots = () => {
        if (!reviewDots) {
            return;
        }

        reviewDots.innerHTML = reviews
            .map(
                (_, index) => `
                    <button
                        type="button"
                        class="review-dot ${
                            index === 0 ? "active" : ""
                        }"
                        data-review="${index}"
                        aria-label="Go to review ${index + 1}"
                        aria-current="${
                            index === 0 ? "true" : "false"
                        }"
                    ></button>
                `
            )
            .join("");
    };


    //    UPDATE REVIEW

    const updateReview = () => {
        if (!reviewTrack || reviews.length === 0) {
            return;
        }

        reviewTrack.style.transform =
            `translateX(-${currentReview * 100}%)`;

        // Update slide accessibility
        const slides =
            reviewTrack.querySelectorAll(".review-slide");

        slides.forEach((slide, index) => {
            slide.setAttribute(
                "aria-hidden",
                String(index !== currentReview)
            );
        });

        // Update navigation dots
        const dots =
            reviewDots?.querySelectorAll(".review-dot");

        dots?.forEach((dot, index) => {
            const isActive = index === currentReview;

            dot.classList.toggle("active", isActive);

            dot.setAttribute(
                "aria-current",
                String(isActive)
            );
        });
    };


    //    REVIEW CONTROLS

    const nextReview = () => {
        if (reviews.length === 0) {
            return;
        }

        currentReview =
            (currentReview + 1) % reviews.length;

        updateReview();
    };


    const previousReview = () => {
        if (reviews.length === 0) {
            return;
        }

        currentReview =
            (currentReview - 1 + reviews.length) %
            reviews.length;

        updateReview();
    };


    //    REVIEW AUTOPLAY

    const stopReviewAutoplay = () => {
        if (!reviewTimer) {
            return;
        }

        clearInterval(reviewTimer);
        reviewTimer = null;
    };


    const startReviewAutoplay = () => {
        if (reviews.length <= 1) {
            return;
        }

        stopReviewAutoplay();

        reviewTimer = setInterval(
            nextReview,
            5000
        );
    };


    //    REVIEW EVENT LISTENERS

    if (reviewTrack && reviews.length > 0) {
        renderReviews();
        updateReview();

        reviewNext?.addEventListener("click", () => {
            nextReview();
            startReviewAutoplay();
        });

        reviewPrev?.addEventListener("click", () => {
            previousReview();
            startReviewAutoplay();
        });

        reviewDots?.addEventListener("click", (event) => {
            const button =
                event.target.closest(".review-dot");

            if (!button) {
                return;
            }

            const reviewIndex =
                Number(button.dataset.review);

            if (
                Number.isNaN(reviewIndex) ||
                reviewIndex < 0 ||
                reviewIndex >= reviews.length
            ) {
                return;
            }

            currentReview = reviewIndex;

            updateReview();
            startReviewAutoplay();
        });

        // Pause autoplay while hovering
        reviewSlider?.addEventListener(
            "mouseenter",
            stopReviewAutoplay
        );

        reviewSlider?.addEventListener(
            "mouseleave",
            startReviewAutoplay
        );

        // Pause when keyboard focus enters slider
        reviewSlider?.addEventListener(
            "focusin",
            stopReviewAutoplay
        );

        reviewSlider?.addEventListener(
            "focusout",
            startReviewAutoplay
        );

        startReviewAutoplay();
    }


   
    //    FAQ ACCORDION

    const faqItems =
        document.querySelectorAll(".faq-item");

    const closeFaqItem = (item) => {
        item.classList.remove("active");

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        question?.setAttribute(
            "aria-expanded",
            "false"
        );

        if (answer) {
            answer.style.maxHeight = null;
        }
    };


    faqItems.forEach((item) => {
        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        if (!question || !answer) {
            return;
        }

        question.setAttribute(
            "aria-expanded",
            item.classList.contains("active")
                ? "true"
                : "false"
        );

        question.addEventListener("click", () => {
            const isActive =
                item.classList.contains("active");

            // Close all FAQ items first
            faqItems.forEach((otherItem) => {
                closeFaqItem(otherItem);
            });

            // Open selected item
            if (!isActive) {
                item.classList.add("active");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

                answer.style.maxHeight =
                    `${answer.scrollHeight}px`;
            }
        });
    });


    //    CURRENT YEAR

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    // HEADER SCROLL EFFECT

    const header =
        document.getElementById("header");

    const updateHeader = () => {
        if (!header) {
            return;
        }

        header.classList.toggle(
            "scrolled",
            window.scrollY > 10
        );
    };

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    //    IMAGE ERROR HANDLING

    document
        .querySelectorAll("img")
        .forEach((image) => {
            image.addEventListener("error", () => {
                image.setAttribute(
                    "data-image-error",
                    "true"
                );
            });
        });

    //    HELPERS

    function escapeHtml(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }


    function escapeAttribute(value) {
        return escapeHtml(value);
    }
});