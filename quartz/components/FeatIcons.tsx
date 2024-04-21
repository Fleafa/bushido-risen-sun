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
  
		const cost = fileData.frontmatter?.cost
		var costStr
		const timing = fileData.frontmatter?.timing
		var timingVar
		const subject = fileData.frontmatter?.subject
		var subjectVar
		const range = fileData.frontmatter?.range
		var rangeStr
		const oppKi = fileData.frontmatter?.opposed
		var oppKiVar
		const limitations = fileData.frontmatter?.limitations?.toString().split(",")
		var limitVar = []

		if (cost != null){ costStr = cost + ' ' }

		if (timing != null) { timingVar = <img class="timing" src={'/images/Timing-' + timing + '.png'} alt={timing}></img>	}

		if (subject != null){ subjectVar = <img src={'/images/Subject-' + subject + '.png'} alt={subject}></img> }

		if (range != null){
			if (range == "BtB"){
				rangeStr = ' BtB '
			} else {
			rangeStr = ' ' + range + '" '
			}
		}

		if ( oppKi == true ){ oppKiVar = <img src="/images/OppKi.png" alt="Opposed Ki Test"></img> }
		
		if (limitations != null){
			for (var i = 0; i < limitations.length; i++) {
				if (limitations[i] != 'OpA') {
					const iVar = <a href={'/Rulebook/definitions/feats/' + limitations[i]}><img src={'/images/' + limitations[i] + '.png'} alt={limitations[i]}></img></a>
					limitVar.push(iVar)
				}
			}
		}

		return <p class={classNames(displayClass, "feat-icons")}>{costStr}{timingVar}{subjectVar}{rangeStr}{oppKiVar}{limitVar}</p> 
	  } else {
		return null
	  }
	}

	return FeatIconsdata
  }) satisfies QuartzComponentConstructor
  