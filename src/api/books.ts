import express from 'express';
import { title } from 'process';

const router = express.Router();

type EmojiResponse = string[];

router.get<{}, EmojiResponse>('/', async (req, res) => {
  res.render('index', { title: "" });
})

// <div id="a-page"><script type="a-state" data-a-state="{&quot;key&quot;:&quot;a-wlab-states&quot;}">{"AUI_KILLSWITCH_CSA_LOGGER_372963":"C"}</script><div id="annotation-section" class="a-section" style="margin-bottom: 0px; height: 366px;"><div id="annotation-scroller" class="a-scroller kp-notebook-scroller-addon a-scroller-vertical"><!-- Add a nice message if a desktop user has been redirected -->
// <div class="a-row a-spacing-top-extra-large kp-notebook-annotation-container"><!-- This choice is for either a desktop- or mobile-oriented header -->
//     <!-- To handle tablet grid logic-->
// <!-- To handle tablet grid logic-->
// <div class="a-row a-spacing-base"><div class="a-column a-span1 kp-notebook-bookcover-container"><a class="a-link-normal kp-notebook-printable a-text-normal" target="_blank" rel="noopener" href="https://www.amazon.com/dp/B0CHV6ZYG4"><span class="a-declarative" data-action="kp-notebook-detail-page-url" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-kp-notebook-detail-page-url" data-kp-notebook-detail-page-url="{}" data-csa-c-id="lgkztl-o7m1fc-j8pidd-tu1d72"><img alt="" src="https://m.media-amazon.com/images/I/81uFmtkjGNL._SY160.jpg" class="kp-notebook-cover-image-border"></span></a></div><div class="a-column a-span5"><p class="a-spacing-small a-size-mini a-color-base kp-notebook-selectable kp-notebook-metadata a-text-bold a-text-caps">Your Kindle Notes For:</p><h3 class="a-spacing-top-small a-color-base kp-notebook-selectable kp-notebook-metadata">Right Thing, Right Now: Good Values. Good Character. Good Deeds. (The Stoic Virtues Series)</h3><p class="a-spacing-none a-spacing-top-micro a-size-base a-color-secondary kp-notebook-selectable kp-notebook-metadata">Ryan Holiday</p><span class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Last accessed on&nbsp;<span id="kp-notebook-annotated-date">Thursday November 28, 2024</span></span></div></div><div class="a-row a-spacing-large"><div class="a-column a-span10 kp-notebook-row-separator"><span class="a-size-base-plus a-color-base kp-notebook-selectable kp-notebook-metadata a-text-bold"><span id="kp-notebook-highlights-count">9</span>&nbsp;Highlight(s)<font color="gray">&nbsp;|&nbsp;</font>
// <span id="kp-notebook-notes-count">0</span>&nbsp;Note(s)</span><div id="kp-notebook-hidden-annotations-summary" class="a-box a-alert-inline a-alert-inline-warning aok-hidden" aria-live="polite" aria-atomic="true"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Some highlights have been hidden or truncated due to export limits.</div></div></div></div></div><!-- Both mobile and desktop use the same JSP to render the actual annotations themselves -->
//     <div id="kp-notebook-annotations" class="a-row"><input type="hidden" name="" value="bSQf2M7cjdIIDzVWtpFffynDQFJ8c%2FskaYA1H41%2Ftz4KXitaG6VW" class="kp-notebook-content-limit-state"><input type="hidden" name="" class="kp-notebook-annotations-next-page-start"><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyOTY3MTpISUdITElHSFQ6YTI3UlVLUDk4WjVaM0Y" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="198" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;198</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;198</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 198&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyOTY3MTpISUdITElHSFQ6YTI3UlVLUDk4WjVaM0Y-action" data-csa-c-id="kod6pl-pa2779-7n1l3o-2qr6gd"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyOTY3MTpISUdITElHSFQ6YTI3UlVLUDk4WjVaM0Y" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyOTY3MTpISUdITElHSFQ6YTI3UlVLUDk4WjVaM0Y" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">In the first century BC, Hillel, the Jewish elder, was asked by a skeptic if he could summarize the Torah while standing on one foot. In fact, he could do it in ten words. “Love thy neighbor as thyself,” Hillel told the man. “All the rest is commentary.”</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDo5OTQ4MTpISUdITElHSFQ6YTJLVkxRTE5EM05aRVg" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="664" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;664</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;664</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 664&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDo5OTQ4MTpISUdITElHSFQ6YTJLVkxRTE5EM05aRVg-action" data-csa-c-id="ckw7lq-8aczs-nnh4oj-ttm5qc"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDo5OTQ4MTpISUdITElHSFQ6YTJLVkxRTE5EM05aRVg" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDo5OTQ4MTpISUdITElHSFQ6YTJLVkxRTE5EM05aRVg" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">“We make an agreement with children that they can sit in the audience without helping to make the play,” the doctor tells her as they sit on her couch, “but if they still sit in the audience after they’re grown, somebody’s got to work double time for them, so that they can enjoy the light and glitter of the world.”</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMTgyNjU6SElHSExJR0hUOmEyTUdSUjQ2WEhaTVpL" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="789" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;789</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;789</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 789&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMTgyNjU6SElHSExJR0hUOmEyTUdSUjQ2WEhaTVpL-action" data-csa-c-id="virgc-5jprzr-ohfrsd-r672vn"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMTgyNjU6SElHSExJR0hUOmEyTUdSUjQ2WEhaTVpL" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMTgyNjU6SElHSExJR0hUOmEyTUdSUjQ2WEhaTVpL" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">By focusing inward, he made his mark externally. The man who wrote in Meditations that doing the right thing today was far more valuable than posthumous fame managed to get both. This is more than irony. It is the point.</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjI0Mjc6SElHSExJR0hUOmExMUc0QjVaRVBLNUtQ" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="817" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;817</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;817</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 817&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjI0Mjc6SElHSExJR0hUOmExMUc0QjVaRVBLNUtQ-action" data-csa-c-id="xeghhg-x18b38-loxj0k-i5ft9u"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjI0Mjc6SElHSExJR0hUOmExMUc0QjVaRVBLNUtQ" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjI0Mjc6SElHSExJR0hUOmExMUc0QjVaRVBLNUtQ" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">In 1630, when John Winthrop spoke of America as a “city on a hill,” he wasn’t speaking of American exceptionalism. He meant it as an admonition. That a city on a hill can’t hide. That the world was watching and that this new country—built around virtue—needed to be a good example.</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjQzNTE6SElHSExJR0hUOmEzQVFBTFRTUzRMNFZI" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="830" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;830</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;830</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 830&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjQzNTE6SElHSExJR0hUOmEzQVFBTFRTUzRMNFZI-action" data-csa-c-id="lbs8so-j2o80h-bs1m0t-dyrz6"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjQzNTE6SElHSExJR0hUOmEzQVFBTFRTUzRMNFZI" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjQzNTE6SElHSExJR0hUOmEzQVFBTFRTUzRMNFZI" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">There is the story of a Spartan king who met two of his subjects, a youth and the youth’s lover, accidentally in a crowd. Embarrassed, the subjects tried to hide their blushing cheeks, but the king noticed and replied, “Son, you ought to keep the company of the sort of people who won’t cause you to change color when observed.”</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjgzMDU6SElHSExJR0hUOmExVjdTSjBQVDhDWlVR" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="856" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;856</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;856</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 856&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjgzMDU6SElHSExJR0hUOmExVjdTSjBQVDhDWlVR-action" data-csa-c-id="9ne7f7-i49liz-84pd6s-u7l74z"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjgzMDU6SElHSExJR0hUOmExVjdTSjBQVDhDWlVR" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxMjgzMDU6SElHSExJR0hUOmExVjdTSjBQVDhDWlVR" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">We want people to see what we’re doing. We want to be the city on the hill. We should be the kind of person who the more they hear about us, the more they respect and admire us.</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzA5MTA6SElHSExJR0hUOmExS0U4RERJMDU4QkxZ" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="1140" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;1,140</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;1,140</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 1,140&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzA5MTA6SElHSExJR0hUOmExS0U4RERJMDU4QkxZ-action" data-csa-c-id="9jfbft-6wmyxr-tkwmim-4o74jp"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzA5MTA6SElHSExJR0hUOmExS0U4RERJMDU4QkxZ" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzA5MTA6SElHSExJR0hUOmExS0U4RERJMDU4QkxZ" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">Integrity may sometimes be relegated to the drawer labeled “too hard,” but life is much harder, much sadder without it.</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzU5MDg6SElHSExJR0hUOmEzU0RNSEI4VTJBNEFB" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="1173" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;1,173</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;1,173</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 1,173&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzU5MDg6SElHSExJR0hUOmEzU0RNSEI4VTJBNEFB-action" data-csa-c-id="9p1emo-edw0zf-ke9gsu-pn9f7y"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzU5MDg6SElHSExJR0hUOmEzU0RNSEI4VTJBNEFB" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoxNzU5MDg6SElHSExJR0hUOmEzU0RNSEI4VTJBNEFB" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">When we don’t do our best, when we hold something back, we are cheating ourselves. We are cheating our gifts. We are cheating the potential beneficiaries of us reaching our full potential.</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyMDQ0NjQ6SElHSExJR0hUOmE2R0NPWVk4WUFZQVo" class="a-row a-spacing-base"><div class="a-column a-span10 kp-notebook-row-separator"><!-- Header row containing: optionally a star, note/highlight label, page/location information, and an
// options dropdown -->
// <div class="a-row"><input type="hidden" name="" value="1364" id="kp-annotation-location"><!-- optional star, note/highlight label, page/location -->
// <div class="a-column a-span8"><!-- Star, if necessary -->
// <!-- Highlight -->
// <!-- Highlight header -->
//     <span id="annotationHighlightHeader" class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">Orange highlight | Location:&nbsp;1,364</span><!-- Note header in case highlight is deleted, and we need to have the note header -->
//     <span id="annotationNoteHeader" class="a-size-small a-color-secondary aok-hidden kp-notebook-selectable kp-notebook-metadata">Note | Location:&nbsp;1,364</span><!-- Freestanding note header -->
// </div><!-- the Options menu -->
// <div class="a-column a-span4 a-text-right a-span-last"><span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;closeButtonLabel&quot;:&quot;Close&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;width&quot;:&quot;200&quot;,&quot;name&quot;:&quot;optionsPopover&quot;,&quot;position&quot;:&quot;triggerVerticalAlignLeft&quot;,&quot;popoverLabel&quot;:&quot;Options for annotations at Location 1,364&quot;}" id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyMDQ0NjQ6SElHSExJR0hUOmE2R0NPWVk4WUFZQVo-action" data-csa-c-id="b92ao7-px5k5u-dunxx5-m0r06x"><a id="popover-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyMDQ0NjQ6SElHSExJR0hUOmE2R0NPWVk4WUFZQVo" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">Options<i class="a-icon a-icon-popover"></i></a></span></div></div><!-- Container for text content of the note / highlight -->
// <div class="a-row a-spacing-top-medium"><div class="a-column a-span10 a-spacing-small kp-notebook-print-override"><!-- Highlight with a child note -->
// <!-- Highlight without a child note -->
// <!-- Highlight text -->
//     <div id="highlight-QTI5U1cwUVA5MUtPU1k6QjBDSFY2WllHNDoyMDQ0NjQ6SElHSExJR0hUOmE2R0NPWVk4WUFZQVo" class="a-row kp-notebook-highlight kp-notebook-selectable kp-notebook-highlight-orange"><span id="highlight" class="a-size-base-plus a-color-base">The tricky thing is we don’t have to tell ourselves we’re never going to do it, we can tell a more comforting lie instead: I’ll do it later. I’ll do it when I’m more secure. I’ll do it when it will really count.</span><div></div>
// </div><!-- Placeholder for if a child note is added by the customer -->
//     <div id="note-" class="a-row a-spacing-top-base kp-notebook-note aok-hidden kp-notebook-selectable"><span id="note-label" class="a-size-small a-color-secondary">Note:<span class="a-letter-space"></span></span><span id="note" class="a-size-base-plus a-color-base"></span></div><!-- Orphaned note without associated highlight -->
// </div></div></div></div><div id="empty-annotations-pane" class="a-row aok-hidden"><div class="a-column a-span6 a-push3">







// <div class="a-box a-spacing-top-extra-large a-box-normal a-text-center"><div class="a-box-inner">
// <div class="a-row a-spacing-large a-spacing-top-medium">
// <div class="a-column a-span4 a-push4">
// <img alt="" src="img/Note_icon.png" class="kp-notebook-cover-image" height="44">
// </div>
// </div>
// <p class="a-spacing-medium a-size-medium a-text-bold"> Would you like to take some notes?</p>
// <span>
// You haven’t created any notes for this book yet. You can add or remove bookmarks, highlights, and notes at any location in a Kindle book. 
// </span>
// <div class="a-row a-spacing-extra-large a-spacing-top-medium"><a class="a-link-emphasis" target="_blank" rel="noopener" href="https://www.amazon.com/b/?node=11627044011&amp;ref=k4w_ms_ynh_empty"> Learn more about notes and highlights</a></div>
// </div></div>
// </div></div></div><div id="kp-notebook-annotations-spinner" class="a-spinner-wrapper kp-notebook-spinner" style="display: none;"><span class="a-spinner a-spinner-small"></span></div><div id="kp-notebook-annotations-load-error" class="a-row a-spacing-small a-spacing-top-small aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error kp-notebook-error-msg" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Sorry, we''ve experienced a problem. Please try again.</div></div></div></div><input type="hidden" name="" value="B0CHV6ZYG4" id="kp-notebook-annotations-asin"><!-- This is a hidden dummy element used to identify if response is valid -->      
//     <input type="hidden" name="" id="kp-notebook-check-validity"></div></div></div>







// <input type="hidden" name="anti-csrftoken-a2z" value="hKIrmV3ojM0vdMPIUkwG9QVrS/36D/MHoVGr8SoRF8m5AAAAAGeHIW0AAAAB">










// <!-- Modal for Delete Highlight -->


// <span class="a-declarative" data-action="a-modal" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-modal" data-a-modal="{&quot;name&quot;:&quot;deleteHighlightPreload&quot;,&quot;width&quot;:&quot;600&quot;,&quot;header&quot;:&quot;Delete Highlight&quot;,&quot;footer&quot;:&quot;\u003cspan class=\&quot;a-declarative\&quot; data-action=\&quot;a-popover-close\&quot; data-csa-c-type=\&quot;widget\&quot; data-csa-c-func-deps=\&quot;aui-da-a-popover-close\&quot; data-a-popover-close=\&quot;{}\&quot;>\n        \u003cspan class=\&quot;a-button a-button-base\&quot;>\u003cspan class=\&quot;a-button-inner\&quot;>\u003cinput class=\&quot;a-button-input\&quot; type=\&quot;submit\&quot;/>\u003cspan class=\&quot;a-button-text a-text-center\&quot; aria-hidden=\&quot;true\&quot;>\n            Cancel\n        \u003c\/span>\u003c\/span>\u003c\/span>\n    \u003c\/span>\n    \u003cspan class=\&quot;a-declarative\&quot; data-action=\&quot;delete-highlight-action\&quot; data-csa-c-type=\&quot;widget\&quot; data-csa-c-func-deps=\&quot;aui-da-delete-highlight-action\&quot; data-delete-highlight-action=\&quot;{&amp;quot;deviceType&amp;quot;:&amp;quot;desktop&amp;quot;}\&quot;>\n        \u003cspan id=\&quot;deleteHighlight\&quot; class=\&quot;a-button a-button-primary kp-notebook-modal-button\&quot;>\u003cspan class=\&quot;a-button-inner\&quot;>\u003cinput class=\&quot;a-button-input\&quot; type=\&quot;submit\&quot; aria-labelledby=\&quot;deleteHighlight-announce\&quot;/>\u003cspan id=\&quot;deleteHighlight-announce\&quot; class=\&quot;a-button-text a-text-center\&quot; aria-hidden=\&quot;true\&quot;>\n            Delete highlight\n        \u003c\/span>\u003c\/span>\u003c\/span>\n    \u003c\/span>&quot;}" id="deleteHighlightModal" data-csa-c-id="xah53m-glfg1m-ob2dhm-5l171s">
// </span>
// <div class="a-popover-preload" id="a-popover-deleteHighlightPreload">
// <p class="a-spacing-none a-size-small a-color-base">
// Once you delete this highlight, it will be removed from all of your devices.
// </p>
// <input type="hidden" name="" id="deleteHighlightAnnotationId">
// <div id="deleteHighlightError" class="a-row a-spacing-small a-spacing-top-small aok-hidden">
// <div class="a-box a-alert-inline a-alert-inline-error" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
// Sorry, we''ve experienced a problem. Please try again.
// </div></div></div>
// </div>
// </div>

// <!-- Modal for Delete Note -->


// <span class="a-declarative" data-action="a-modal" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-modal" data-a-modal="{&quot;name&quot;:&quot;deleteNotePreload&quot;,&quot;width&quot;:&quot;600&quot;,&quot;header&quot;:&quot;Delete Note&quot;,&quot;footer&quot;:&quot;\u003cspan class=\&quot;a-declarative\&quot; data-action=\&quot;a-popover-close\&quot; data-csa-c-type=\&quot;widget\&quot; data-csa-c-func-deps=\&quot;aui-da-a-popover-close\&quot; data-a-popover-close=\&quot;{}\&quot;>\n        \u003cspan class=\&quot;a-button a-button-base\&quot;>\u003cspan class=\&quot;a-button-inner\&quot;>\u003cinput class=\&quot;a-button-input\&quot; type=\&quot;submit\&quot;/>\u003cspan class=\&quot;a-button-text a-text-center\&quot; aria-hidden=\&quot;true\&quot;>\n            Cancel\n        \u003c\/span>\u003c\/span>\u003c\/span>\n    \u003c\/span>\n    \u003cspan class=\&quot;a-declarative\&quot; data-action=\&quot;delete-note-action\&quot; data-csa-c-type=\&quot;widget\&quot; data-csa-c-func-deps=\&quot;aui-da-delete-note-action\&quot; data-delete-note-action=\&quot;{&amp;quot;deviceType&amp;quot;:&amp;quot;desktop&amp;quot;}\&quot;>\n        \u003cspan id=\&quot;deleteNote\&quot; class=\&quot;a-button a-button-primary kp-notebook-modal-button\&quot;>\u003cspan class=\&quot;a-button-inner\&quot;>\u003cinput class=\&quot;a-button-input\&quot; type=\&quot;submit\&quot; aria-labelledby=\&quot;deleteNote-announce\&quot;/>\u003cspan id=\&quot;deleteNote-announce\&quot; class=\&quot;a-button-text a-text-center\&quot; aria-hidden=\&quot;true\&quot;>\n            Delete note\n        \u003c\/span>\u003c\/span>\u003c\/span>\n    \u003c\/span>&quot;}" id="deleteNoteModal" data-csa-c-id="z0uiys-ai6fmn-b9657q-16x9ub">
// </span>
// <div class="a-popover-preload" id="a-popover-deleteNotePreload">
// <p class="a-spacing-none a-size-small a-color-base">
// Once you delete this note, it will be removed from all of your devices.
// </p>
// <input type="hidden" name="" id="deleteNoteAnnotationId">
// <div id="deleteNoteError" class="a-row a-spacing-small a-spacing-top-small aok-hidden">
// <div class="a-box a-alert-inline a-alert-inline-error" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
// Sorry, we''ve experienced a problem. Please try again.
// </div></div></div>
// </div>
// </div>

// <!-- Modal for Read More -->
// <span class="a-declarative" data-action="a-modal" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-modal" data-a-modal="{&quot;name&quot;:&quot;readMorePreload&quot;,&quot;width&quot;:&quot;600&quot;,&quot;header&quot;:&quot;Opening in Kindle&quot;}" id="readMoreModal" data-csa-c-id="g1v847-tu7xd9-1lvq27-12y2w6">
// </span>
// <div class="a-popover-preload" id="a-popover-readMorePreload">
// <div class="a-row">
// <div class="a-column a-span6 a-text-right">
// <span class="a-size-base-plus a-color-base" role="heading">
// Don't have Kindle for PC/Mac?
// </span>
// </div>
// <div class="a-column a-span6 a-text-left a-span-last">
// <a class="a-size-base-plus a-link-normal a-text-normal" href="https://www.amazon.com/kindle-dbs/kcpApp">
// Download it now for free
// </a>
// </div>
// <div class="a-column a-span12 a-text-center a-spacing-top-base">
// <span class="a-declarative" data-action="a-popover-close" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover-close" data-a-popover-close="{}" data-csa-c-id="6m28kb-8otgbt-555b1y-stemnh">
// <a class="a-size-base-plus a-link-normal a-text-normal" href="javascript:void(0);">
//     Close
// </a>
// </span>
// </div>
// </div>
// </div>

// <!-- Edit Note Div -->
// <div id="editNoteDiv" class="a-row a-spacing-top-large aok-hidden">
// <label for="editNoteTextArea" class="a-form-label kp-notebook-modal-label">Write your note here...</label>
// <div class="a-input-text-wrapper a-span12"><textarea placeholder="Write your note here..." id="editNoteTextArea"></textarea></div>
// <input type="hidden" name="" id="editNoteAnnotationId">
// <div id="editNoteError" class="a-row a-spacing-top-small aok-hidden">
// <div class="a-box a-alert-inline a-alert-inline-error" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
// Sorry, we''ve experienced a problem. Please try again.
// </div></div></div>
// </div>
// <div class="a-row a-spacing-top-small">
// <div class="a-column a-span8 a-text-right a-span-last">
// <ul class="a-unordered-list a-nostyle a-horizontal">
// <li><span class="a-list-item">
//     <span class="a-declarative" data-action="cancel-edit-note-action" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-cancel-edit-note-action" data-cancel-edit-note-action="{}" data-csa-c-id="6gzw03-qyeb4u-fh530c-gdv40z">
//         <span id="cancelEditText" class="a-button a-button-base"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="cancelEditText-announce"><span id="cancelEditText-announce" class="a-button-text" aria-hidden="true">
//             Cancel
//         </span></span></span>
//     </span>
// </span></li>
// <li><span class="a-list-item">
//     <span class="a-declarative" data-action="edit-note-action" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-edit-note-action" data-edit-note-action="{}" data-csa-c-id="qwkdei-6ic02w-ugnlfa-u1bf3h">
//         <span id="editNoteText" class="a-button a-button-primary"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="editNoteText-announce"><span id="editNoteText-announce" class="a-button-text" aria-hidden="true">
//             Save
//         </span></span></span>
//     </span>
// </span></li>
// </ul>
// </div>
// </div>
// </div>

// <!-- Add Note Div -->
// <div id="addNoteDiv" class="a-row a-spacing-top-large aok-hidden">
// <label for="addNoteTextArea" class="a-form-label kp-notebook-modal-label">Write your note here...</label>
// <div class="a-input-text-wrapper a-span12"><textarea placeholder="Write your note here..." id="addNoteTextArea"></textarea></div>
// <input type="hidden" name="" id="addNoteAnnotationId">
// <div id="addNoteError" class="a-row a-spacing-top-small aok-hidden">
// <div class="a-box a-alert-inline a-alert-inline-error" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
// Sorry, we''ve experienced a problem. Please try again.
// </div></div></div>
// </div>
// <div class="a-row a-spacing-top-small">
// <div class="a-column a-span8 a-text-right a-span-last">
// <ul class="a-unordered-list a-nostyle a-horizontal">
// <li><span class="a-list-item">
//     <span class="a-declarative" data-action="cancel-add-note-action" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-cancel-add-note-action" data-cancel-add-note-action="{}" data-csa-c-id="819w3o-h78ja2-umu2lc-rl1uhp">
//         <span id="cancelAddNoteText" class="a-button a-button-base"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="cancelAddNoteText-announce"><span id="cancelAddNoteText-announce" class="a-button-text" aria-hidden="true">
//             Cancel
//         </span></span></span>
//     </span>
// </span></li>
// <li><span class="a-list-item">
//     <span class="a-declarative" data-action="add-note-action" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-add-note-action" data-add-note-action="{}" data-csa-c-id="tbpnau-rtpal8-92zyoq-qmn2uv">
//         <span id="addNoteText" class="a-button a-button-primary"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="addNoteText-announce"><span id="addNoteText-announce" class="a-button-text" aria-hidden="true">
//             Save
//         </span></span></span>
//     </span>
// </span></li>
// </ul>
// </div>
// </div>
// </div>
// </div>

export default router;