import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Routes from 'views/Routes';
import Sidebar from 'components/Sidebar';
import CodeBlock, { CodeBlockProvider } from 'components/CodeBlock';

const App = () => (
    <HashRouter>
        <Sidebar />
        <CodeBlockProvider>
            <main className='content'>
                <article className='content-main'>
                    <Suspense fallback='Loading...'>
                        <Switch>
                            {Routes.map(props => (
                                <Route key={props.path} {...props} />
                            ))}
                        </Switch>
                    </Suspense>
                </article>
                <CodeBlock />
            </main>
        </CodeBlockProvider>
    </HashRouter>
);

export default App;
