let counterFired = [];
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
            if (entry.isIntersecting && !counterFired.includes(entry.target.id)) {
                //run only once
                counterFired.push(entry.target.id);
                $(document).ready(function () {
                    $('.counter').each(function () {
                        let $this = $(this),
                            countTo = $this.attr('data-count');
                        $({countNum: $this.text()}).animate({
                                countNum: countTo
                            },
                            {
                                duration: 3000,
                                easing: 'linear',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                    //alert('finished');
                                }
                            });
                    });
                    setTimeout( ()=> {
                        let counterSeparator=document.querySelectorAll('.counter')
                        counterSeparator.forEach((separator)=>{
                            separator.textContent=thousands_separators(separator.innerHTML);
                        })
                    }, 3010);

                });

            }
        }
    )
})

function thousands_separators(num)
{
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}


