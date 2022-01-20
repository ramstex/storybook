export const isAbsoluteUrl = (url) => {
	let is = false;
	if (!!url && typeof url === 'string') {
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
