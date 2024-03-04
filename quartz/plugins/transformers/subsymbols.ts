import { QuartzTransformerPlugin } from "../types"
import replace from 'stream-replace-string'

export interface Options {
	enableSubSymbols: boolean
}

const defaultOptions: Options = {
	enableSubSymbols: true,
}

const findNoBtB = new RegExp(/\=\=[nN]oBtB\=\=/, "g")
const findNoBtBLink = new RegExp(/\=\=\[\[[nN]oBtB\]\]\=\=/, "g")
const findNoMove = new RegExp(/\=\=[nN]oMove\=\=/, "g")
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
				src = src.replaceAll(findNoBtBLink, (value, ...capture) => {
				//	const [src] = capture
					return '<a href="../Rulebook/definitions/feats/noBtB"><img id="nobtb" title="no base to base" alt="no base to base" src="../images/nobtb.png"><a>'
				})
				src = src.replaceAll(findNoMove, (value, ...capture) => {
				//	const [src] = capture
					return '<a href="../Rulebook/definitions/feats/noMove"><img id="nobtb" title="no move" alt="no move" src="../images/nomove.png"></a>'
				})
			}
			return src
		},
	}
}