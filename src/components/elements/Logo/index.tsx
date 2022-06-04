export const Logo: React.FC<{ fill?: string }> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 606 95"
      fill={fill ? fill : "#116893"}
    >
      <path d="M86.4 47.9c0 2.3-.2 4.6-.5 6.9-3.1 20.7-19.8 37-40.8 39.5H2v-73h13.5v59.5h28.7c13.9-2 25.1-12.6 27.9-26.1.5-2.2.7-4.5.7-6.9 0-2.3-.2-4.5-.7-6.6-1.6-8.1-6.3-15.2-12.6-20-5.3-4-11.7-6.4-18.7-6.7H2V1.1h37.9 0c23.5.3 42.8 17.6 46 40.2.3 2.1.5 4.3.5 6.6zm97-46.8v59.3c0 7-2.6 13.9-7.4 19.1a53.15 53.15 0 0 1-6.1 5.5c-7.9 5.9-17.6 9.4-28.2 9.4a47.15 47.15 0 0 1-28.3-9.4c-2.2-1.7-4.3-3.5-6.1-5.5-4.8-5.2-7.4-12-7.4-19V1.1h13.5v51.4c0 15.2 12 27.8 27.2 28.3h1 1c15.2-.4 27.2-13.1 27.2-28.3V1.1h13.6zm97 .3v92.9h-13.5V33.8l-18.4 18.3-4.4 4.4-5.1 5.1-28.6-28.4h0l-13.5-13.4V.8L239 42.6l41.4-41.2zm-83.5 27.8l13.5 13.4v51.6h-13.5v-65zM377.4 1.4v92.9h-13.5V33.8l-18.4 18.3-4.4 4.4-5.1 5.1-28.6-28.4h0l-13.5-13.4V.8L336 42.6l41.4-41.2zm-83.5 27.8l13.5 13.4v51.6h-13.5v-65zm97 65.1V.9h13.5v93.4h-13.5zm0-93.4v93.4h13.5V.9h-13.5zm13 .5h-12.6v92.5h12.6V1.4zm102.2 92.9h-40.4c-13.1 0-25-5.1-33.7-13.4-8.8-8.4-14.2-20.1-14.2-33s5.4-24.6 14.2-33c8.7-8.3 20.5-13.4 33.7-13.4H506v13.4h-45c-16.9 2.2-30 16.2-30 33s13.1 30.8 30 33h31.7V51.2H466l-6.2-13.4h46.4v56.5zM604 1.1v13.4h-82.8V1.1H604zm-69.3 79.7H604v13.4h-82.8v-73h13.5v16.3h60.2V51h-60.2v29.8z" />
    </svg>
  );
};