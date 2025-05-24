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

// this function splits without space, like 1px -> ["1", "px"]
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

export function splitValueIn3(value) {
	const values = value.split(' ')
	if (values.length > 2) {
		return {
			first: values[0],
			second: values[1],
			third: values[2],
		}
	}
	return null // or handle invalid input
}

// this function finds element in styles and check if a sub string is not present in it
// example: if we any one from border, border-left, border-right, border-top, border-bottom.
// but not border-radius. We can pass border as str and radius as substrNotInStr to avoid not wanted value
export function findStyleUsingSubstringWithNotFilter(str, substrNotInStr, styles) {
	for (const style in styles) {
		if (style.includes(str)) {
			if (substrNotInStr) {
				if (!str.includes(substrNotInStr)) {
					return style
				}
			} else {
				return style
			}
		}
	}
	return false
}
