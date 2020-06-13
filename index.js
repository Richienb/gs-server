"use strict"

const responseMethods = {
	send(data, mimeType = ContentService.MimeType.TEXT) {
		return ContentService.createTextOutput(data).setMimeType(mimeType)
	},
	html(data, values) {
		if (values) {
			const template = HtmlService.createTemplate(data)
			Object.assign(template, values)
			data = template.evaluate().getContent()
		}

		return HtmlService.createHtmlOutput(data)
	},
	json(data) {
		return responseMethods.send(JSON.stringify(data), ContentService.MimeType.JSON)
	}
}

exports.get = handler => {
	globalThis.doGet = ({ parameter: query }) => handler({
		query,
		userAgent: HTMLService.getUserAgent()
	}, responseMethods)
}

exports.post = handler => {
	globalThis.doPost = ({ parameter: query, postData }) => handler({
		query,
		userAgent: HTMLService.getUserAgent(),
		data: postData.contents,
		mimeType: postData.type
	}, responseMethods)
}
