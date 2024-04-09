import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

/*
title: 
cost: #, Rank #
timing: Active, Instant, Simple, Complex, Special
subject: Aura, Personal, Pulse, Target, Special
range: #, BtB
opposed: true, false
limitations: noBtB, noWalk, OpG, OpT, OpA

*/

export default (() => {
  
	function FeatIconsdata({ fileData, displayClass }: QuartzComponentProps) {
	  const text = fileData.text
  
	  if (text) {
		var icons: string[] = []
  
		const cost: any = fileData.frontmatter?.cost
		icons.push(cost)
		
		const timing: string = '<img src="/images/Timing-' + fileData.frontmatter?.timing + '.png"/>'
		icons.push(timing)
		
		const subject: string = '<img src="/images/Subject-' + fileData.frontmatter?.subject + '.png"/>'
		icons.push(subject)
		
		const range: any = fileData.frontmatter?.range
		if (range != null){
			icons.push(range)
		}

		if ( fileData.frontmatter?.opposed == true ){
			icons.push('<img src="/images/OppKi.png"/>')
		}

		const limitations: any = fileData.frontmatter?.limitations
		if (limitations != null){			
			for (const limit in limitations){
				const limitIcon: string = '<img src="/images/' + limit + '.png"/>'
				icons.push(limitIcon)
			}
		}
  
		return <p class={classNames(displayClass, "feat-icons")}>{icons.join(" ")}</p>
	  } else {
		return null
	  }
	}
  
	FeatIconsdata.css = `
	.feat-icons {
	  margin-top: 0;
	  color: var(--gray);
	}
	`
	return FeatIconsdata
  }) satisfies QuartzComponentConstructor
  