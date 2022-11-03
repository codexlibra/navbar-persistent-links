/*!
 * Navbar Persistent Links  v1.0.0
 * Copyright 2022 Codex Libra
 * Licensed under MIT (https://github.com/codexlibra/navbar-persistent-links/blob/master/LICENSE)
 */
let list_links = document.querySelectorAll(".navbar-link");

let path = window.location.href;
// http://localhost/navbar-persistent-links/navbar/about.php

let path_split = path.split('/');
// (6) ['http:', '', 'localhost', 'navbar-persistent-links', 'navbar', 'about.php']

let href_path = path_split[5];
// about.php

if (href_path == '') {
	href_path = "index.php";
}

list_links.forEach(function (link) {
	let link_path = link.href;
	// http://localhost/navbar-persistent-links/navbar/about.php

	let link_path_split = link_path.split('/');
	// (6) ['http:', '', 'localhost', 'navbar-persistent-links', 'navbar', 'about.php']
	
	let link_href_path = link_path_split[5];
	// about.php

	if (href_path == link_href_path) {
		link.classList.add("active");
	}
});