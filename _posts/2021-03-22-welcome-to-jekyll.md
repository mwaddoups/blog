---
title: 'Sidewinder X1: Purchase Guide and Initial Setup'
date: 2021-03-11 19:07:11 +0000
categories:
- 3dprinting

---
After much deliberation, I finally decided today to enter the world of 3D printing. I had spent much of the recent lockdown tinkering with Arduino parts and working on projects, and I could clearly see the value in being able to create custom parts.

My key motivations at this point were:

1. Finish a bluetooth speaker for which I had all the electronics, but none of the housing. I had designed a wooden box in CAD, but 3D printing would allow much more organic design.
2. Create a modular low-pressure aeroponic system. I had made a basic one using a storage box and a hole saw, but am interested in designing a tower version.
3. Be able to print custom hard-wearing clips for hiking gear or other tools I own that have broken parts.

I also figured I would learn a lot from the experience and gain a better understanding of what is possible and what problems still exist in the technology.

### Purchasing

The first question is which printer to go for. A small part of me considered doing a self-build, but I could already feel another cost-spiralling project coming on if I took that on, so figured better to invest in an existing model.

The largest technological split is between FDM (plastic is fused from a nozzle working up) and SLA (stereo lithography, where the item is fused out of resin). SLA printers have higher resolution but require well-ventilated areas and are often more expensive and less common among hobbyists. I figured a better first attempt was an FDM printer.

The market is broadly split into:

* Lower budget, chinese-made printers such as the Creality Ender or Artillery Genius (\~£150-£200).
* Mid-budget chinese-made printers with larger build areas (the CR-10, the Sidewinder X1) (\~£250-£350).
* High-budget (for hobbyists) and considered by most to be the best printer you can get, the Prusa i3 is a European-made printer. It's also £700.

Whilst all printers work well, what you seem to be paying for is lower tolerances. The cheaper printers can arrive with warped beds, poor materials, cheaper parts and plastic parts that break. The Prusa models will just print out of the box.

I initially considered the Prusa, but there was both a 4 week lead time and I also wanted something with a larger bed since I was wanting to build more "industrial" parts (rather than figurines). There is a huge modding community in these chinese printers, and many people have come up with "upgrades" (parts you can print) to improve or replace parts on the printer. I figured getting something that didn't work so well would teach me more about calibration, what can go wrong and what you can fix.

In this search, I also found [this spreadsheet](https://docs.google.com/spreadsheets/d/1xEZq0ovtieAof78GG8L_DPWIoD0iHY69tpp_7Mo6ZKU/edit#gid=840841259) from the 3dp discord extremely helpful. This was what eventually led me to go for the Sidewinder X1. I won't pretend it was the most scientific choice - but essentially: I figured the larger build area wouldn't hurt, nobody seemed to have horrible things to say about them, and if I spent too much time agonizing over this choice I would never get one.

I also found it on Banggood with money off for £275 new and shipped in a few days. So that helped.

### Early Setup

I thought it might be helpful to note a few things that I didn't know when starting out. These might go on to help other people:

1. Out of the box, the gantry (the z-axis rails) wouldn't slot nicely into the holes. Following an online suggestion, a simple solution for this was to loosen off a couple bolts on the top of the gantry. It then slotted in nicely and these could be re-tightened.
2. I was so worried about breaking something, I didn't realise you could move the bed/extruder/z axis without any issues! The stepper motors aren't powered so can just be turned by hand. The bed and extruder you can move by hand, and to move the z-axis you can just hand-rotate the metal bearings on the back of the gantry. The belt will ensure that both sides are kept in line (but turning both is good practice). Raising the z-axis helps for plugging in the fiddly ribbon cables.
3. Adjusting the eccentric nuts was very difficult - particularly on the bed. Bear in mind that these nuts are differently shaped along one rotation - so turning more than one rotation is not going to change the effect. The movements need to be minute and accurate and it took me a good 30 minutes to get all 3 rollers moving smoothly on the bed. You're looking for every wheel to move without slipping when you move the bed with your hands.
4. If you are worried that your z-axis is too close to the bed, you can level/adjust the bed using the wheels underneath it. By tightening these the springs will compress and the bed level will come down. I found getting it out of the way made me less concerned initially when setting up.

### Bed Levelling

This brings me onto the next topic. A lot of people have reported issues with levelling on the Sidewinder X1, warped beds, etc. I think I have been quite lucky to not have had major issues. 

A good metric for the problem is the difference between the outer 4 points and the central point in terms of thickness. If you're using the sheet of paper method, you should be aiming for each of the four outer points to drag consistently on the sheet of paper. I had to go around 4 to 5 times to get this consistent. 

Then, try the center point. If the bed's perfectly flat it should drag the same amount. For me, my bed is slightly lower in the middle - so if I folded the paper once it would drag, 2 sheets of paper thick. Others online reported 5 sheets difference - so I feel pretty lucky.

I then went ahead and printed the cube that was on the memory stick. This worked fine and came off easily!

I'll write some more about this printer and the calibration steps I've taken in the next post.