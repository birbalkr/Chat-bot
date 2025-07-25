import React from 'react'

function Loading() {
    return (
        <div class="w-full items-center">
            <div class="grid gap-3">
                <div class="flex items-center justify-center">
                    <svg class="animate-spin border-indigo-300"
                        xmlns="http://www.w3.org/2000/svg" width="56" height="56"
                        viewBox="0 0 56 56" fill="none">
                        <path
                            d="M1.52588e-05 28C1.52588e-05 31.677 0.724255 35.318 2.13139 38.7151C3.53852 42.1122 5.60098 45.1989 8.20102 47.799C10.8011 50.399 13.8878 52.4615 17.2849 53.8686C20.682 55.2757 24.323 56 28 56L28 28H1.52588e-05Z"
                            fill="#4F46E5" />
                        <path
                            d="M56 28C56 24.323 55.2757 20.682 53.8686 17.2849C52.4615 13.8878 50.399 10.8011 47.799 8.20102C45.1989 5.60098 42.1122 3.53851 38.7151 2.13138C35.318 0.724252 31.677 1.24895e-05 28 1.2811e-05L28 28L56 28Z"
                            fill="#4F46E5" />
                        <path
                            d="M28 56C31.677 56 35.318 55.2757 38.7151 53.8686C42.1122 52.4615 45.1989 50.399 47.799 47.799C50.399 45.1989 52.4615 42.1122 53.8686 38.7151C55.2757 35.318 56 31.677 56 28L28 28L28 56Z"
                            fill="#EEF2FF" />
                        <path
                            d="M28 1.89305e-05C24.323 1.94127e-05 20.682 0.724259 17.2849 2.13139C13.8878 3.53853 10.8011 5.60099 8.20102 8.20103C5.60098 10.8011 3.53851 13.8878 2.13138 17.2849C0.72425 20.682 1.11049e-05 24.323 1.1587e-05 28L28 28L28 1.89305e-05Z"
                            fill="#EEF2FF" />
                    </svg>
                </div>
                {/* <span>class="text-black text-sm font-normal leading-snug">Loading...</span> */}
            </div>
        </div>
    )
}

export default Loading