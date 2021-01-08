import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'
export const MENUITEMS = [
    {
        menutitle:"General",
        menucontent:"Dashboards",
        Items:[
        { path: `${process.env.PUBLIC_URL}/dashboard/default`,icon:Home, title: 'Dashboard', type: 'link' },

            
        ]
    },

    {
    menutitle:"Elites Chef",
        menucontent:"Meal Kit Delivery",
        Items:[
        { path: `${process.env.PUBLIC_URL}/app/orders`,icon:ShoppingBag, title: 'Orders', type: 'link' },

        { path: `${process.env.PUBLIC_URL}/app/orders/dashboard`,icon:ShoppingBag, title: 'Orders Dashboard', type: 'link' },

        { path: `${process.env.PUBLIC_URL}/app/weeklyselections`,icon:Calendar, title: 'Weekly Selections', type: 'link' },

        {
                title: 'Meals', icon: Cloud, type: 'sub', children: [
                   
                    {
                        title: 'View Recipes', path: `${process.env.PUBLIC_URL}/app/meals/recipes`, type: 'link', title: 'Recipes' },
                    
                    {
                        title: 'Ingredients', path: `${process.env.PUBLIC_URL}/app/meals/ingredients`, type: 'link', title: 'Ingredients' },
                ]
            },

        {
                title: 'Plans', icon: Box, type: 'sub', children: [
                   
                    {
                        title: 'Lifestyle', path: `${process.env.PUBLIC_URL}/app/plans/lifestyle`, type: 'link', title: 'Lifestyle' },
                    {
                        title: 'Plans', path: `${process.env.PUBLIC_URL}/app/plans/plans`, type: 'link', title: 'Plans' },
                ]
            },
        {
                title: 'Users', icon: Users, type: 'sub', children: [
                   
                    {
                        title: 'All Users', path: `${process.env.PUBLIC_URL}/app/users`, type: 'link', title: 'Users' },
                    {
                        title: 'Reviews', path: `${process.env.PUBLIC_URL}/app/reviews`, type: 'link', title: 'Reviews' },
                    {
                        title: 'Tips', path: `${process.env.PUBLIC_URL}/app/tips`, type: 'link', title: 'Tips' },
                    {
                        title: 'Comments', path: `${process.env.PUBLIC_URL}/app/comments`, type: 'link', title: 'Comments' },
                ]
            },
        {
                title: 'Publish', icon: Server, type: 'sub', children: [
                   
                    {
                        title: 'View Articles', path: `${process.env.PUBLIC_URL}/app/publish/articles`, type: 'link', title: 'Articles' },
                    
                    {
                        title: 'Update Policies', path: `${process.env.PUBLIC_URL}/table/datatable`, type: 'link'
                    },
                ]
            },
            {
                title: 'Settings', icon: Users, type: 'sub', children: [
                   
                    {
                        title: 'Discount Codes', path: `${process.env.PUBLIC_URL}/app/settings/discounts`, type: 'link', title: 'Discounts' },
                    {
                        title: 'Elites Points', path: `${process.env.PUBLIC_URL}/app/settings/elitespoints`, type: 'link', title: 'Elites Points' },
                    {
                        title: 'Payment', path: `${process.env.PUBLIC_URL}/app/settings/payment`, type: 'link', title: 'Payment' },
                    {
                        title: 'General Settings', path: `${process.env.PUBLIC_URL}/app/settings/general`, type: 'link', title: 'General' },
                ]
            },
        ]
            },
            

   ]