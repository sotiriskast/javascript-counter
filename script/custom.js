let counterFired = [];
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
            if (entry.isIntersecting && !counterFired.includes(entry.target.id)) {
                //run only once
                counterFired.push(entry.target.id);
                $(document).ready(function () {
                    $('.counter').each(function () {
                        var $this = $(this),
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
                });

            }
        }
    )
})



