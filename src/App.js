import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react/cjs/react.production.min';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind.js';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import inline from './components/inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form.js'
import LifecycleA from './components/LifecycleA_mounting';
import LifecycleA_update from './components/LifecycleA_update';
import FragmentDemo from './FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/InputRefs/FocusInput';
import FRParentInput from './components/ForwardingRefs/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/ErrorBoundry/Hero';
import Errorboundry from './components/ErrorBoundry/Errorboundry';
import ClickCounter from './components/HigerOrderComponents/ClickCounter';
import HoverCounter from './components/HigerOrderComponents/HoverCounter';
import ClickCounter2 from './components/RenderProps/ClickCounter2';
import HoverCounter2 from './components/RenderProps/HoverCounter2';
import User from './components/RenderProps/User';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/UserContext';
import PostList from './components/Http/PostList';
import PostForm from './components/HttpPost/PostForm';

class App extends Component{
  render(){
    return(
      <div>
        {/* <Greet name="sk"></Greet>
        <Greet name="dk"></Greet>
        <Greet name="divij"></Greet> */}
        {/* <Message></Message>
        <Counter></Counter> */}

        {/* <FunctionClick ></FunctionClick> */}

        {/* <EventBind></EventBind> */}
        
        {/* <ParentComponent></ParentComponent> */}

        {/* <UserGreeting></UserGreeting> */}

        {/* <NameList></NameList> */}

        {/* <StyleSheet primary={true}></StyleSheet> */}

        {/* <inline /> */}

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Error</h1> */}


        {/* <Form></Form> */}

        {/* <LifecycleA></LifecycleA> */}

        {/* <LifecycleA_update></LifecycleA_update> */}

        {/* <FragmentDemo></FragmentDemo> */}

        {/* <Table></Table> */}

        {/* <ParentComp></ParentComp> */}


        {/* <RefsDemo></RefsDemo> */}


        {/* <FocusInput></FocusInput> */}


        {/* <FRParentInput></FRParentInput> */}


        {/* <PortalDemo></PortalDemo> */}

        {/* <Errorboundry>
          <Hero heroName="batman"></Hero>
        </Errorboundry>

        <Errorboundry>
          <Hero heroName="spider"></Hero>
        </Errorboundry>

        <Errorboundry>
          <Hero heroName="joker"></Hero>
        </Errorboundry> */}

        {/* <ClickCounter name='divij'></ClickCounter>
        <HoverCounter></HoverCounter> */}


        {/* Passing props as function */}
        {/* <ClickCounter2></ClickCounter2>
        <HoverCounter2></HoverCounter2>
        <User render={(isLoggedIn)=> isLoggedIn?'divij':'Guest'}></User> */}


        {/* <Counter 
          render={ (count,incCount) => (
            <ClickCounter2 count={count} incCount={incCount} />
            )} 
          />
        <Counter 
          render={ (count,incCount) => (
            <HoverCounter2 count={count} incCount={incCount} />
            )} 
          /> */}

        {/* <UserProvider value='divij'>
          <ComponentC />
        </UserProvider> */}


        {/* <PostList></PostList> */}

        <PostForm></PostForm>
      </div>
    )
  }
}


export default App;
