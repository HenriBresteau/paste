import PageHeader from "../components/PageHeader";
import TitlePresentation from "../components/TitlePresentation";
import PageCard from "../components/PageCard";
import { Blocks, GraduationCap, Pencil } from "lucide-react";
import MembershipCard from "../components/MembershipCard";
import thumbnail from "../assets/thumbnail_membership.svg";
import LayoutPage from "../components/LayoutPage";

const Membership = () => {
    return (
        <LayoutPage>
            <PageHeader
                title="Join the Community - Unlock Exclusive Features"
                description="Become a member and gain access to premium components, priority support, and a vibrant community of developers. Whether you're just getting started or looking to elevate your projects, our membership program is designed to help you achieve your goals faster and more efficiently."
                thumb={thumbnail}
            />
            <div className="flex flex-col gap-10">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <TitlePresentation title="Membership Tiers" />
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-stretch ">
                    <MembershipCard title="Free" price="0">
                        <li>Access to basic components</li>
                        <li>Community support</li>
                        <li>Limited updates</li>
                    </MembershipCard>
                    <MembershipCard title="Pro" price="50" popular>
                        <li>Everything in Free</li>
                        <li>Access to all components</li>
                        <li>Priority support</li>
                        <li>Monthly updates</li>
                    </MembershipCard>
                    <MembershipCard title="Elite" price="99" amount>
                        <li>Everything in Pro</li>
                        <li>Exclusive components</li>
                        <li>1-on-1 support sessions</li>
                        <li>Weekly updates</li>
                        <li>Early access to new features</li>
                    </MembershipCard>
                </div>
            </div>
        </LayoutPage>
    );
};

export default Membership;
