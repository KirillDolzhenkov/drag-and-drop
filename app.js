const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', (e) => {
    return dragstart(e);
});
item.addEventListener('dragend', (e) => {
    return dragend(e);
});

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', (e) => {
        return dragover(e);
    });
    placeholder.addEventListener('dragenter', (e) => {
        return dragenter(e);
    });
    placeholder.addEventListener('dragleave', (e) => {
        return dragleave(e);
    });
    placeholder.addEventListener('drop', (e) => {
        return dragdrop(e);
    });
}

const dragstart = (e) => {
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0);
}
const dragend = (e) => {
    e.target.classList.remove('hold', 'hide');
}

const dragover = (e) => {
    e.preventDefault();
}
const dragenter = (e) => {
    e.target.classList.add('hovered');
}
const dragleave = (e) => {
    e.target.classList.remove('hovered');
}
const dragdrop = (e) => {
    e.target.classList.remove('hovered');
    e.target.append(item);
}