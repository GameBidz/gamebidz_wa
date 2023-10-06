import { Card } from "./Card";

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo justo a massa commodo, at facilisis nisi blandit. Sed leo dui, iaculis eu arcu ac, scelerisque tincidunt velit..";


export function Dashboard() {
    return (
        <section className="grid gap-4 grid-cols-3 grid-rows-3 mt-8">
            <Card title="Title" description={LOREM_IPSUM} />
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM}/>
            <Card title="Title" description={LOREM_IPSUM } />
        </section>
    )
}