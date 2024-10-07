const div = document.querySelector("div");

let x = 0;
let y = 0;

document.addEventListener("pointermove", (e) => {
	const { top, left } = div.getBoundingClientRect();

	x = `${e.x - left}px`;
	y = `${e.y - top}px`;
});

const loop = () => {
	div.style.setProperty("--x", x);
	div.style.setProperty("--y", y);

	requestAnimationFrame(loop);
};

loop();

const colors = [
	"80, 80, 80",
	"11, 142, 138",
	"142, 68, 11",
	"18, 94, 135",
	"148, 0, 153",
	"219, 112, 121",
];
let colorIndex = 0;

document.addEventListener("click", () => {
	colorIndex = (colorIndex + 1) % colors.length;

	div.style.setProperty("--color", colors[colorIndex]);
});
