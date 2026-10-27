function initCarousels() {
	if ( window.Flickity && window.fizzyUIUtils ) {
		window.fizzyUIUtils.htmlInit( window.Flickity, 'flickity' );
	}
}

document.addEventListener( 'DOMContentLoaded', initCarousels );

// Re-init whenever ACF async-renders a block preview in the editor
new MutationObserver( initCarousels ).observe( document.documentElement, {
	childList: true,
	subtree: true,
} );
