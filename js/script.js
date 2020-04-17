const dots = [
	"images/com.matruka.skeuo-repo.png",
	"images/com.matruka.skeuo-maintheme.png",
	"images/com.matruka.skeuo-alticons1.png",
	"images/com.matruka.skeuo-alticons2.png",
	"images/com.matruka.skeuo-folders.png",
	"images/com.matruka.skeuo-badge.png",
	"images/com.matruka.skeuo-dock.png",
	"images/com.matruka.skeuo-pagedots.png",
	"images/com.matruka.skeuo-settings.png",
	"images/com.matruka.skeuo-analogclock.png",
	"images/com.matruka.skeuo-flipclock.png",
	"images/com.matruka.skeuo-original.png"
];
$('#slider-packages').slick({
	arrows: false,
	centerMode: true,
	centerPadding: '120px',
	dots: true,
	slidesToShow: 1,
	customPaging: function(slick,index) {
		return '<a><img width="50" height="50" src="' + dots[index] + '" /></a>';
	},
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '80px',
				dots: true,
				slidesToShow: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				centerMode: false,
				dots: true,
				slidesToShow: 1
			}
		}
	]
});