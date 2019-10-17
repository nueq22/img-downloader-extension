!(function () {
    let images = ['http://placekitten.com/200/200', 'http://placekitten.com/200/200'];

    const listContainer = document.getElementById('list-container');

    const getFileName = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 1];
    };

    const createElement = (el, className, config = {}) => {
        const element = document.createElement(el);
        element.className = className || '';
        for (const prop in config) {
            element[prop] = config[prop]
        }
        return element;
    };

    const createListItem = (src) => {
        const listItem = createElement('div', 'list__item');
        const link = createElement('a', undefined, {
            href: src,
            download: getFileName(src)
        });
        const thumbnail = createElement('img', undefined, { src });
        link.appendChild(thumbnail);
        listItem.appendChild(link);
        return listItem;
    };

    const renderList = (images, el) => {
        el.innerHTML = '';
        const list = createElement('div', 'list');
        images.forEach((src) => {
            const listItem = createListItem(src);
            list.appendChild(listItem);
        });
        el.appendChild(list);
    };

    renderList(images, listContainer);

})();