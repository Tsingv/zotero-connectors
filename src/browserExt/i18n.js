/*
	***** BEGIN LICENSE BLOCK *****
	
	Copyright © 2018 Center for History and New Media
					George Mason University, Fairfax, Virginia, USA
					http://zotero.org
	
	This file is part of Zotero.
	
	Zotero is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	Zotero is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with Zotero.  If not, see <http://www.gnu.org/licenses/>.
	
	***** END LICENSE BLOCK *****
*/

Zotero.i18n = {
	init: () => Zotero.Promise.resolve(),
	getString: function(name, substitutions) {
		if (!Array.isArray(substitutions)) {
			substitutions = [substitutions];
		}
		var str;
		if (Zotero.isChrome) {
			// Chrome doesn't play nice with the browser-polyfill.js API for this function
			str = chrome.i18n.getMessage(name, substitutions);
		} else {
			str = browser.i18n.getMessage(name, substitutions);
		}
		if (!str) {
			Zotero.logError(new Error(`Localised string '${name}' not defined`));
		}
		return str;
	}
};
