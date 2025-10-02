(function () {
    function initStarRating(rating) {
        var stars = Array.prototype.slice.call(rating.querySelectorAll('.star-rating__option--star'));
        var radios = Array.prototype.slice.call(rating.querySelectorAll('.star-rating__radio'));
        var clearLabel = rating.querySelector('.star-rating__option--clear');

        function getCheckedValue() {
            var checked = rating.querySelector('.star-rating__radio:checked');
            return checked ? parseInt(checked.value, 10) : 0;
        }

        function applyState(value) {
            if (value === undefined || value === null) {
                value = getCheckedValue();
            }
            stars.forEach(function (star) {
                var starValue = parseInt(star.getAttribute('data-value'), 10);
                star.classList.toggle('is-active', value > 0 && starValue <= value);
            });
            if (clearLabel) {
                clearLabel.classList.toggle('is-active', value === 0);
            }
        }

        function preview(value) {
            applyState(value);
        }

        stars.forEach(function (star) {
            var value = parseInt(star.getAttribute('data-value'), 10);
            star.addEventListener('mouseenter', function () {
                preview(value);
            });
            star.addEventListener('mouseleave', function () {
                preview();
            });
        });

        if (clearLabel) {
            clearLabel.addEventListener('mouseenter', function () {
                preview(0);
            });
            clearLabel.addEventListener('mouseleave', function () {
                preview();
            });
        }

        radios.forEach(function (radio) {
            radio.addEventListener('change', function () {
                applyState(parseInt(radio.value, 10));
            });
        });

        applyState();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.star-rating').forEach(initStarRating);
        });
    } else {
        document.querySelectorAll('.star-rating').forEach(initStarRating);
    }
})();
