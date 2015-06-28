<?php
add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );

function theme_name_scripts() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    wp_enqueue_script(
		'hammerjs',
		get_stylesheet_directory_uri() . '/js/hammer.min.js',
		array( 'jquery' )
	);

	wp_register_script(
        'main',
        get_stylesheet_directory_uri() . '/js/main.js',
        false,
        '1.0',
        true
    );

    wp_enqueue_script( 'main' );
}
?>