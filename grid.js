export let GRID_WIDTH = 10;
export let GRID_HEIGTH = 4;
export let GRID_SIZE = GRID_WIDTH * GRID_HEIGTH;

const $rootElement = document.querySelector(".container");

export const createGrid = () => {
    for (let i = 0; i < GRID_SIZE+9; i++) {
        const singleBlock = document.createElement("div");
        singleBlock.classList.add("grid-item");
        singleBlock.id = `square${i}`;
        $rootElement.appendChild(singleBlock);
    }
    

    return Array.from(document.querySelectorAll(".grid-item"));
};

export const elements = createGrid();

