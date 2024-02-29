import { QuartzTransformerPlugin } from "../types"
import { findAndReplace } from "mdast-util-find-and-replace"

export const TextTransforms: QuartzTransformerPlugin = () => {
	return {
	  name: "TextTransforms",
	  markdownPlugins() {
		return [() => {
		  return (tree, file) => {
			// replace _text_ with the italics version
			findAndReplace(tree, [/_(.+)_/, 'poop'])
   
		   // remove all links (replace with just the link content)
		   // match by 'type' field on an mdast node
		   // https://github.com/syntax-tree/mdast#link in this example
		/*	visit(tree, "link", (link: Link) => {
			  return {
				type: "paragraph"
				children: [{ type: 'text', value: link.title }]
			  }
			}) */
		  }
		}]
	  }
	}
  }