const handlerClickAnchorLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string = ''): void => {
    if (event && event?.preventDefault) event?.preventDefault();
    window.location.href = (link && link.length > 0) ? `#${link}` : '/';
}


export default {handlerClickAnchorLink}