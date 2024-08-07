import Link from "next/link";
import Image from 'next/image';

export default function SubmitInfo() {
    return (
        <div className="my-8 mx-[10%]">
            <div className="w-full space-y-12">
                {/* Design Content */}
                <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-12 md:space-y-0"> {/* Add items-center to align items vertically */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-semibold pb-4">Design</h2>
                        <span>Create a funny, cute, or pretty clothing design and upload it to our mockup editor to see how it would look on different pieces of clothing.</span>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-1/2"> {/* Adjusted: removed fixed height */}
                        <div className="max-w-md md:max-w-xs w-full h-auto"> {/* New: Control width, auto-adjust height */}
                            <Image
                                src="/images/submit-info/design.png"
                                alt="Design"
                                layout="responsive"
                                width={500} // Example width, adjust based on your actual image aspect ratio
                                height={500} // Example height, adjust based on your actual image aspect ratio
                                objectFit="contain" // Use contain to ensure the image fits within the bounds of its container
                            />
                        </div>
                    </div>
                </div>

                {/* Review Content (below medium size) */}
                <div className="md:hidden flex flex-col items-center space-y-8 md:flex-row md:space-x-12 md:space-y-0"> {/* Add items-center to align items vertically */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-semibold pb-4">Review</h2>
                        <span>We will review your submission  to make sure it doesn’t violate any CWRU trademarks. These submissions go to the design board!</span>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-1/2"> {/* Adjusted: removed fixed height */}
                        <div className="max-w-md md:max-w-xs w-full h-auto"> {/* New: Control width, auto-adjust height */}
                            <Image
                                src="/images/submit-info/review.png"
                                alt="Review"
                                layout="responsive"
                                width={500} // Example width, adjust based on your actual image aspect ratio
                                height={500} // Example height, adjust based on your actual image aspect ratio
                                objectFit="contain" // Use contain to ensure the image fits within the bounds of its container
                            />
                        </div>
                    </div>
                </div>

                {/* Review Content (above medium size) */}
                <div className="hidden md:flex flex-col items-center space-y-8 md:flex-row md:space-x-12 md:space-y-0"> {/* Add items-center to align items vertically */}
                    <div className="flex items-center justify-center w-full md:w-1/2"> {/* Adjusted: removed fixed height */}
                        <div className="max-w-md md:max-w-xs w-full h-auto"> {/* New: Control width, auto-adjust height */}
                            <Image
                                src="/images/submit-info/review.png"
                                alt="Review"
                                layout="responsive"
                                width={500} // Example width, adjust based on your actual image aspect ratio
                                height={500} // Example height, adjust based on your actual image aspect ratio
                                objectFit="contain" // Use contain to ensure the image fits within the bounds of its container
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-semibold pb-4">Review</h2>
                        <span>Submissions using trademarks like &quot;CWRU&quot; must have recognizable parody/humor. After review, approved submissions go to the design board!</span>
                    </div>
                </div>

                {/* Win Content */}
                <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-12 md:space-y-0"> {/* Add items-center to align items vertically */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-semibold pb-4">Win</h2>
                        <span>Vote for your favorite designs by liking them! The three designs with the most likes will win rewards. In the case of a tie, earlier submission date/time will determine the winners.</span>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-1/2"> {/* Adjusted: removed fixed height */}
                        <div className="max-w-md md:max-w-xs w-full h-auto"> {/* New: Control width, auto-adjust height */}
                            <Image
                                src="/images/submit-info/win.png"
                                alt="Win"
                                layout="responsive"
                                width={500} // Example width, adjust based on your actual image aspect ratio
                                height={500} // Example height, adjust based on your actual image aspect ratio
                                objectFit="contain" // Use contain to ensure the image fits within the bounds of its container
                            />
                        </div>
                    </div>
                </div>

                {/* Review Content (below medium size) */}
                <div className="md:hidden flex flex-col items-center space-y-8 md:flex-row md:space-x-12 md:space-y-0"> {/* Add items-center to align items vertically */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-semibold pb-4">Shop</h2>
                        <span>Submitted designs may be featured on the Campus Flavor shop!</span>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-1/2"> {/* Adjusted: removed fixed height */}
                        <div className="max-w-md md:max-w-xs w-full h-auto"> {/* New: Control width, auto-adjust height */}
                            <Image
                                src="/images/submit-info/buy.png"
                                alt="Buy"
                                layout="responsive"
                                width={500} // Example width, adjust based on your actual image aspect ratio
                                height={500} // Example height, adjust based on your actual image aspect ratio
                                objectFit="contain" // Use contain to ensure the image fits within the bounds of its container
                            />
                        </div>
                    </div>
                </div>

                {/* Buy Content (above medium size) */}
                <div className="hidden md:flex flex-col items-center space-y-8 md:flex-row md:space-x-12 md:space-y-0"> {/* Add items-center to align items vertically */}
                    <div className="flex items-center justify-center w-full md:w-1/2"> {/* Adjusted: removed fixed height */}
                        <div className="max-w-md md:max-w-xs w-full h-auto"> {/* New: Control width, auto-adjust height */}
                            <Image
                                src="/images/submit-info/buy.png"
                                alt="Buy"
                                layout="responsive"
                                width={500} // Example width, adjust based on your actual image aspect ratio
                                height={500} // Example height, adjust based on your actual image aspect ratio
                                objectFit="contain" // Use contain to ensure the image fits within the bounds of its container
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-semibold pb-4">Shop</h2>
                        <span>Submitted designs may be featured on the Campus Flavor shop!</span>
                    </div>
                </div>

            </div>

            <Link href="/submit" className="w-full flex flex-col flex-grow items-center">
                <button
                    className="py-2 px-8 mt-8 rounded-lg focus:outline-none bg-black text-white hover:bg-gray-700"
                >
                    Submit Design
                </button>
            </Link>
        </div>
    );
}
