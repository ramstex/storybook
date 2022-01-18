const isAbsoluteUrl = (url) => {
	let is = false;
	if (!!url) {
		let checkList = [
			'http://',
			'https://',
			'ftp://',
			'ssh://',
			'//',
			'data:text/',
		];
		for (let i = 0; i < checkList.length; i++) {
			if (url.indexOf(checkList[i]) === 0) {
				is = true;
				break;
			}
		}
	}
	return is;
};

export default {
	install(Vue, options) {
		Vue.prototype.$isAbsoluteUrl = isAbsoluteUrl;
	},
};
