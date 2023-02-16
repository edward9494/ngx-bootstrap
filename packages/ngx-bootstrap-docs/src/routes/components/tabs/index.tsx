import { component$ } from '@builder.io/qwik';
import DemoSection from '../../../components/demo-section/demo-section';
import DocsSection from '../../../components/docs-section/docs-section';
import { demoComponentContent } from './tabs-section.list';
import ExampleComponent from '../../../components/example-component/example-component';

//todo Demos imports are here, cause there is trouble with dynamic imports, should be replaced in tabs-section.list.ts
import BasicTabDemoComponent from '../../../components/demos/tabs/basic/basic';
import DisabledTabComponent from "~/components/demos/tabs/disabled/disabled";
import DynamicTabs from '~/components/demos/tabs/dynamic/dynamic';
import ManualSelection from '~/components/demos/tabs/manual-selection/manual-selection';


export default component$(() => {
    const name = 'Tabs';
    const src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/tabs';
    // const componentTree = [BasicTabDemoComponent, DisabledTabComponent, DynamicTabs]
    const componentTree = [BasicTabDemoComponent, ManualSelection, DisabledTabComponent, DynamicTabs]

    return (
        <DemoSection src={src} name={name}>
            <p>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. <strong>Nested tabs are not supported.</strong></p>
            <p>The easiest way to add the tabs component to your app (will be added to the root module).</p><br/>
            <p>Note: If you use several <code>Tabset</code> in your project, set customId for each one.</p>

            <DocsSection
                section={demoComponentContent}>
                <div q:slot="overview" id={'examples-box'}>
                    <div className='examples'>
                        {!!demoComponentContent?.[0].description && (<p dangerouslySetInnerHTML={demoComponentContent?.[0].description}/>)}
                            {demoComponentContent?.[0].content?.map((item, index) => {
                                const Tag = componentTree[index] as any;
                                return (
                                    <div key={`example-item-${item.title}-${index}-key`}>
                                        <ExampleComponent section={item} code={item.component}>
                                            <Tag></Tag>
                                        </ExampleComponent>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
                <div q:slot="api">
                    api
                </div>
                <div q:slot="examples">
                    examples
                </div>
            </DocsSection>
        </DemoSection>
    );
});

