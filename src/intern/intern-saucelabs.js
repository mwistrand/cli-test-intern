define([
	'./intern'
], function (intern) {

	intern.environments = [
		{ browserName: 'internet explorer', version: [ '10.0', '11.0' ], platform: 'Windows 7' },
		// { browserName: 'microsoftedge', platform: 'Windows 10' },
		{ browserName: 'firefox', version: '49', platform: 'Windows 10' },
		{ browserName: 'chrome', platform: 'Windows 10' },
		// { browserName: 'safari', version: '9', platform: 'OS X 10.11' },
		// { browserName: 'chrome', version: '54.0', platform: 'macOS 10.12' },
        // { browserName: 'firefox', version: '49.0', platform: 'macOS 10.12' },
		// { browserName: 'android', platform: 'Linux', version: '4.4', deviceName: 'Google Nexus 7 HD Emulator' }// ,
		// { browserName: 'opera', version: '12.15', platform: 'Linux' },
        // { browserName: 'chrome', version: '48.0', platform: 'Linux' },
		// { browserName: 'iphone', version: '9.1', deviceName: 'iPhone 6' },
	];

	/* SauceLabs supports more max concurrency */
	intern.maxConcurrency = 4;

	/* SauceLabs combined with Travis often causes functional tests to fail with too short a timeout */
	intern.defaultTimeout = 10000;

	intern.tunnel = 'SauceLabsTunnel';
    intern.tunnelOptions = {};

	return intern;
});
