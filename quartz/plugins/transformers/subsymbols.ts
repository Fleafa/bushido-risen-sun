import { QuartzTransformerPlugin } from "../types"
import { findAndReplace } from "mdast-util-find-and-replace"
import { visit } from "unist-util-visit"

export const TextTransforms: QuartzTransformerPlugin = () => {
	return {
	  name: "TextTransforms",
	  markdownPlugins() {
		return [() => {
		  return (tree, file) => {
			// replace _text_ with the italics version
			findAndReplace(tree, /_(.+)_/, (_value: string, ...capture: string[]) => {
			  // inner is the text inside of the () of the regex
			  const [inner] = capture
			  // return an mdast node
			  // https://github.com/syntax-tree/mdast
			  return {
				type: "emphasis",
				children: [{ type: 'text', value: inner }]
			  }
			})

		  }
		}]
	  }
	}
  }