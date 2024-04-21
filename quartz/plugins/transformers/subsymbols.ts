import { QuartzTransformerPlugin } from "../types"

export interface Options {
	enableSubSymbols: boolean
}

const defaultOptions: Options = {
	enableSubSymbols: true,
}

const findNoBtB = new RegExp(/(?:!\[{2})[nN]oBtB.png(?:\]{2})/, "g")
const findNoMove = new RegExp(/(?:!\[{2})[nN]oMove.png(?:\]{2})/, "g")
const findFeatActive = new RegExp(/\=\=[aA]ctive\=\=/, "g")
const findFeatInstant = new RegExp(/\=\=[iI]nstant\=\=/, "g")
const findFeatSimple = new RegExp(/\=\=[sS]imple\=\=/, "g")
const findFeatComplex = new RegExp(/\=\=[cC]omplex\=\=/, "g")
const findFeatTarget = new RegExp(/\=\=[tT]arget\=\=/, "g")
const findFeatAura = new RegExp(/\=\=[aA]ura\=\=/, "g")
const findPulse = new RegExp(/\=\=[pP]ulse\=\=/, "g")
const findPersonal = new RegExp(/\=\=[pP]ersonal\=\=/, "g")
const findOpT = new RegExp(/\=\=OpT\=\=/, "g")
const findOpG = new RegExp(/\=\=OpG\=\=/, "g")

export const SubSymbols: QuartzTransformerPlugin<Partial<Options> | undefined> = (
	userOpts, 
) => {
	const opts = { ...defaultOptions, ...userOpts}
	return {
		name: "SubSymbols",
		textTransform(_ctx, src) {
			if (opts.enableSubSymbols) {
				src = src.toString()
				src = src.replaceAll(findNoBtB, (value, ...capture) => {
				//	const [src] = capture
					return '<a href="/Rulebook/definitions/feats/noBtB"><img alt="noBtB" src="/images/noBtB.png"></a>'
				})
				src = src.replaceAll(findNoMove, (value, ...capture) => {
				//	const [src] = capture
					return '<a href="/Rulebook/definitions/feats/noWalk"><img alt="no walk" src="/images/noWalk.png"></a>'
				})
			}
			return src
		},
	}
}