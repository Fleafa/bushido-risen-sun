import { QuartzTransformerPlugin } from "../types"
import { findAndReplace } from "mdast-util-find-and-replace"
import {fromMarkdown} from 'mdast-util-from-markdown'
import {visit} from 'unist-util-visit'

export const SubSymbols: QuartzTransformerPlugin = () => {
	return {
		name: "SubSymbols",
		markdownPlugins() {
			return [() => {
				return (tree, file) => {
					// replace _text_ with the italics version
					findAndReplace(tree, /==(NoBtB)==_/, (_value: string, ...capture: string[]) => {
						// inner is the text inside of the () of the regex
						const [inner] = capture
						// return an mdast node
						// https://github.com/syntax-tree/mdast
						return {
							type: "image",
							url: "images/NoBtB.png"
						}
					})
   				}
			}]
		}
	}
}