import React, { Component } from 'react';

class RecordingContent extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'show-content' : 'hide-content'}>
                <div className="content-wrapper">
                    <p><strong><em>Oswaldo Aroldo Ortiz</em></strong></p>
                    <p><strong><em>510 W 600 S, Heber City, UT</em></strong></p>
                    <p><strong><em>435-709-1366</em></strong></p>
                    <p><strong><em><a href="mailto:ozyosmosis@gmail.com">ozyosmosis@gmail.com</a></em></strong></p>
                    <p>&nbsp;</p>
                    <p><b>{data.date}</b></p>
                    <p><b>{data.fullName}</b></p>
                    <p><b>{data.company}</b></p>
                    <p><b>{data.address}</b></p>
                    <p>&nbsp;</p>
                    <p><strong>Confirmation of Engagement</strong></p>
                    <p>Job No.: <b>{data.jobNum}</b></p>
                    <p>&nbsp;</p>
                    <p><strong>Project Title/Description:</strong> <b>{data.project}</b></p>
                    <p>&nbsp;</p>
                    <p><strong>Copyright Usage:</strong> The rights granted to Client are for the usage of the Final Design in its original form only. Client may not modify the Final Design. License: Exclusive, Lifetime Rights. All other rights to be negotiated separately.</p>
                    <p>&nbsp;</p>
                    <p><strong>Fee:</strong> <b>{data.fees}</b></p>
                    <p>&nbsp;</p>
                    <p><strong>TERMS</strong></p>
                    <ol>
                    <li><strong>Reservation of Rights:</strong> All rights not expressly granted above are retained by the Designer. Any use additional to that expressly granted above requires arrangement for payment of a separate fee.</li>
                    <li><strong>Revisions:</strong> Revisions may be made only by the Designer at the Preliminary Design phase. Additional fees will be charged for revisions made after 3-5 preliminary design revisions, and for additions to project scope.</li>
                    <li><strong>Payment Schedule:</strong> <b>{data.upfrontFee}</b> upon project commencement, remaining upon project completion.</li>
                    <li><strong>Payment Terms: </strong>Payment due 30 days from issuance of invoice. A one and one half (1.5%) monthly service charge will be billed against late payments. Grant of copyright is conditioned upon receipt of final payment, and upon Client's compliance with the terms of this agreement.</li>
                    <li><strong>Cancellation Fees:</strong> In the event of Cancellation, Developer will be compensated for services performed through the date of cancelation in the amount of a prorated portion of the fees due. Upon cancellation all rights to the website revert to the Developer and all original art must be returned, including sketches, comps, or other preliminary materials.</li>
                    <li><strong>Credits and Promotion:</strong> A credit line suitable to the design of the pages will be used. Client agrees to pay an additional fifty percent (50%) of the total fee, excluding expenses, for failure to include credit line. Developer reserves the right to include screen shots of the completed work in his portfolio.</li>
                    <li><strong>Preliminary Works:</strong> Developer retains all rights in and to all Preliminary Designs. Client shall return all Preliminary Designs to Developer within thirty (30) days of completion of the project and all rights in and to any Preliminary Designs shall remain the exclusive property of Developer.</li>
                    <li><strong>Permissions and Releases:</strong> The Client agrees to indemnify and hold the Developer harmless against any and all claims, costs, and expenses, including attorney's fees, due to resources included in the Design at the request of the Client for which no copyright permission or privacy release was requested, or for which uses exceed the uses allowed pursuant to a permission or release.</li>
                    <li><strong>Miscellaneous:</strong> This Agreement shall be binding upon the parties, their heirs, successors, assigns, and personal representatives. This Agreement constitutes the entire understanding of the parties. Its terms can be modified only by a writing signed by both parties, except that the Client may authorize expenses or revisions orally. Any dispute arising out of this agreement will be resolved by negotiation between the parties. If they are unable to resolve the dispute, either party may commence mediation and/or binding arbitration through the American Arbitration Association. A waiver of a breach of any of the provisions of this Agreement shall not be construed as a continuing waiver of other breaches of the same or other provisions. This Agreement shall be governed by the laws of the State of Utah and courts of such state shall have exclusive jurisdiction and venue.</li>
                    </ol>
                    <p>&nbsp;</p>
                    <p><strong>This Agreement must be signed and returned before Developer can schedule or begin this job.</strong></p>
                    <p><strong>&nbsp;</strong></p>   
                </div>
            </div>
        )
    }
}
export default RecordingContent;