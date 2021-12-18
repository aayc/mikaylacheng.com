import Layout from "../components/Layout";
import JournalEntryPreview from "../components/small/JournalEntryPreview";

export default function Journal() {
    return (
        <Layout showHome={false} showSideBar={false}>
            <div className="w-full">
                <p className="text-6xl">journal</p>
                <div className="m-auto">
                <div className="flex justify-center">
                    <div className="mt-12">
                        <JournalEntryPreview 
                            text="TLDR: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown..."
                            title="sex and world peace reflection"
                            tags={["social causes", "world peace"]}>
                        </JournalEntryPreview>
                        <JournalEntryPreview 
                            text="TLDR: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...TLDR: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown..."
                            title="sex and world peace reflection"
                            tags={["social causes", "world peace"]}>
                        </JournalEntryPreview>
                        <JournalEntryPreview 
                            text="TLDR: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown..."
                            title="reflection"
                            tags={["social causes", "world peace"]}>
                        </JournalEntryPreview>
                        <JournalEntryPreview 
                            text="TLDR: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown..."
                            title="sex and world peace reflection"
                            tags={["social causes", "world peace"]}>
                        </JournalEntryPreview>
                    </div>
                    <div className="mt-12">
                        <JournalEntryPreview 
                            text="TLDR: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown..."
                            title="reflection"
                            tags={["social causes", "world peace"]}>
                        </JournalEntryPreview>
                        <JournalEntryPreview 
                            text="TLDR: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown..."
                            title="sex and world peace reflection"
                            tags={["social causes", "world peace"]}>
                        </JournalEntryPreview>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}