import { type XIcon as LucideIcon, type LucideProps } from "lucide-react";

type Icon = typeof LucideIcon;

const Icons = {
    account: (props: LucideProps) => (
        <svg
            width={props.width || "24"}
            height={props.height || "24"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_420_1768)">
                <path
                    d="M14.7291 2.44498C14.0916 2.26123 13.4278 2.63248 13.2441 3.26998L8.44406 20.07C8.26031 20.7075 8.63156 21.3712 9.26906 21.555C9.90656 21.7387 10.5703 21.3675 10.7541 20.73L15.5541 3.92998C15.7378 3.29248 15.3666 2.62873 14.7291 2.44498ZM17.7516 6.94873C17.2828 7.41748 17.2828 8.17873 17.7516 8.64748L21.1003 12L17.7478 15.3525C17.2791 15.8212 17.2791 16.5825 17.7478 17.0512C18.2166 17.52 18.9778 17.52 19.4466 17.0512L23.6466 12.8512C24.1153 12.3825 24.1153 11.6212 23.6466 11.1525L19.4466 6.95248C18.9778 6.48373 18.2166 6.48373 17.7478 6.95248L17.7516 6.94873ZM6.25031 6.94873C5.78156 6.47998 5.02031 6.47998 4.55156 6.94873L0.351562 11.1487C-0.117188 11.6175 -0.117188 12.3787 0.351562 12.8475L4.55156 17.0475C5.02031 17.5162 5.78156 17.5162 6.25031 17.0475C6.71906 16.5787 6.71906 15.8175 6.25031 15.3487L2.89781 12L6.25031 8.64748C6.71906 8.17873 6.71906 7.41748 6.25031 6.94873Z"
                    fill={props.fill || "#C9C7B3"}
                />
            </g>
            <defs>
                <clipPath id="clip0_420_1768">
                    <rect
                        width="23.9981"
                        height="24"
                        fill={props.fill || "#C9C7B3"}
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    spinner: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
};

export { type Icon, Icons };
