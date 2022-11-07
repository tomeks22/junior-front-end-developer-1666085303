import React, {Component} from 'react';

import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockIcon from '@mui/icons-material/Lock';

class Window extends Component {
            task1 = {
                title: 'Application Setup',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel gravida orci. Proin odio ex, elementum eu malesuada sit amet, congue eget dui. Suspendisse sem ligula, pharetra non aliquam non, tincidunt rutrum nunc. Suspendisse faucibus, diam et facilisis pellentesque, ligula justo posuere tellus, vitae viverra nunc erat ut quam. Praesent semper elit suscipit blandit iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in consequat nulla, sit amet semper augue. Donec cursus efficitur nibh, vel cursus velit faucibus et. Morbi sit amet augue tellus. Vivamus sapien justo, ullamcorper aliquet lectus a, interdum facilisis nulla. Suspendisse lobortis pulvinar mauris, pulvinar tempus dolor. Aliquam commodo gravida arcu, dictum gravida neque sagittis vel',
                status: 'done'
            }
            task2 = {
                title: 'Administrator Panel',
                content: 'Fusce tincidunt libero eget orci facilisis vulputate. In varius pretium scelerisque. Vestibulum leo arcu, dictum nec feugiat non, sagittis sit amet neque. Ut vulputate sem leo, eu placerat dolor ultricies at. Mauris et massa diam. Ut quis pulvinar dolor, vestibulum aliquet est. Fusce ut cursus lacus. Vestibulum accumsan gravida ornare. Maecenas mollis mattis elit, sed porttitor erat consectetur sit amet.',
                status: 'done'
            }
            task3 = {
                title: 'Connect Admin with Frontend',
                content: 'Etiam malesuada tincidunt semper. Nunc dolor nulla, luctus id tempus ut, dignissim quis diam. Aliquam placerat ex at sapien pellentesque bibendum. Nam eget metus id mauris dapibus pharetra eu quis odio. Aliquam facilisis bibendum neque, feugiat consequat libero ultricies et. Ut tristique justo lobortis finibus gravida. Etiam sed arcu in augue efficitur maximus vitae sit amet tellus.',
                status: 'current'
            }
            task4 = {
                title: 'Book review status',
                content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
                status: 'lock'
            }
        
    
    ic = document.getElementById("ic");
    render () {
        return (
            
            <div className="window">
                <div className="header">
                    YOUR TASKS
                </div>
                <hr></hr>
                <div className="tasksList">
                    <ul>
                        <li><CheckIcon  id="ic" className={this.task1.status}/>{this.task1.title}</li>
                        <li><CheckIcon className={this.task2.status}/>{this.task2.title}</li>
                        <li className="curr"><ArrowForwardIcon className={this.task3.status}/>{this.task3.title}</li>
                        <li ><LockIcon className={this.task4.status}/>{this.task4.title}</li>
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default Window;