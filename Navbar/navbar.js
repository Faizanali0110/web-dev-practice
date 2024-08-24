
        function moveHoverEffect(element) {
            const hoverEffect = document.getElementById('hoverEffect');
            const nav = document.querySelector('nav');
            const navRect = nav.getBoundingClientRect();
            console.log(navRect ,"Nav")
            const elementRect = element.getBoundingClientRect();
            console.log(elementRect,"element")
            const leftOffset = elementRect.left - navRect.left;

            console.log(elementRect.left,"element")
            console.log(navRect.left,"nav")
            console.log(leftOffset)

            hoverEffect.style.width = `${elementRect.width}px`;
            hoverEffect.style.height = `${elementRect.height}px`;
            hoverEffect.style.transform = `translateX(${leftOffset}px)`;
        }
    