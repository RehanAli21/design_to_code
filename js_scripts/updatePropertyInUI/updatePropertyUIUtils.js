import { ElementData } from '../data/element_data.js'
import { PageModes } from '../data/enums.js'
import PagesData from '../data/page_data.js'

export function getStyles() {
	let styles = {}
	PagesData

	if (PagesData.activePageWidthMode == PageModes.XSMALL) styles = ElementData.styles.xsmall
	else if (PagesData.activePageWidthMode == PageModes.SMALL) styles = ElementData.styles.small
	else if (PagesData.activePageWidthMode == PageModes.MEDIUM) styles = ElementData.styles.medium
	else if (PagesData.activePageWidthMode == PageModes.LARGE) styles = ElementData.styles.large
	else if (PagesData.activePageWidthMode == PageModes.XLARGE) styles = ElementData.styles.xlarge

	return styles
}

export function splitValue(value) {
	const match = value.match(/^([0-9.]+)(px|%|em|rem)$/)
	if (match) {
		return {
			number: parseFloat(match[1]),
			unit: match[2],
		}
	}
	return null // or handle invalid input
}
