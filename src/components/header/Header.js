export function renderHeader() {
    const headerElement = document.createElement('header');
    const wrapperElement = document.createElement('div');
    const logoElement = document.createElement('img');

    headerElement.classList.add('header')
    wrapperElement.classList.add('wrapper')
    logoElement.src = 'assets/images/logo.svg';

    wrapperElement.append(logoElement)
    headerElement.append(wrapperElement);
    return headerElement
}