function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
    rootMargin: '-200px',
})

scrollTrigger('.loader', {
    rootMargin: '-200px',
    cb: function(el){
        el.innerText = 'Loading...'
        setTimeout(() => {
            el.innerText = 'Task Complete!'
        }, 1000)
    }
})


scrollTrigger(".product-card", {
cb: function(el){
    el.classList ="product-card animate__animated animate__backInLeft";
    
}
})


scrollTrigger(".about-us-section", {
    cb: function(el){
        el.classList ="about-us-section bg-light animate__animated animate__backInLeft";
        
    }
    })



  

        
        
    